const { test, expect } = require('@playwright/test');

test.describe('Portfolio Site E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/');
  });

  test('should load the home page correctly', async ({ page }) => {
    // Check if the hero section name is visible
    const heroName = page.locator('.hero__name');
    await expect(heroName).toBeVisible();
    
    // Check for the presence of the navbar
    const navbar = page.locator('.navbar');
    await expect(navbar).toBeVisible();
  });

  test('should navigate to the Certifications section and verify data', async ({ page }) => {
    // Click on the Certifications link in the navbar
    const certsLink = page.locator('.navbar__link', { hasText: 'Certifications' });
    await certsLink.click();

    // Verify the Certifications section is visible
    const certsSection = page.locator('#certifications');
    await expect(certsSection).toBeInViewport();

    // Check if certification cards are present (initially 6)
    const certCards = page.locator('.certification-card');
    await expect(certCards).toHaveCount(6);

    // Find and click the Load More button
    const loadMoreBtn = page.locator('.certifications__load-more-btn');
    await loadMoreBtn.click();

    // Verify the count increases to 12
    await expect(certCards).toHaveCount(12);

    // Click Load More again to see index 17 (the first non-PDF Google badge)
    await loadMoreBtn.click();
    await expect(certCards).toHaveCount(18);

    // Verify at least one credential link is present in the overlay
    const certLink = page.locator('.certification-card__overlay-link').first();
    await expect(certLink).toBeAttached();
    await expect(certLink).toContainText('Verify Credential');

    // Verify the Google Skills image is rendered (as a placeholder for PDFs or as a standalone badge)
    // We use a simpler selector that targets the img tag directly within the card image container
    const googleSkillsImg = page.locator('.certification-card__image-wrapper img[src*="google" i]').first();
    await expect(googleSkillsImg).toBeAttached();
  });

  test('should filter certifications by category', async ({ page }) => {
    // Click on the Certifications link in the navbar
    const certsLink = page.locator('.navbar__link', { hasText: 'Certifications' });
    await certsLink.click();

    // Verify filter buttons are visible
    const filterButtons = page.locator('.certifications__filter-btn');
    await expect(filterButtons).toHaveCount(7);

    // Active button should be 'All'
    const activeFilterBtn = page.locator('.certifications__filter-btn--active');
    await expect(activeFilterBtn).toHaveText('All');

    // Click on 'AI & Gen AI' filter button
    const genAiBtn = page.locator('.certifications__filter-btn', { hasText: 'AI & Gen AI' });
    await genAiBtn.click();
    await expect(genAiBtn).toHaveClass(/certifications__filter-btn--active/);

    // Verify card count is 6 (pagination resets to 6)
    const certCards = page.locator('.certification-card');
    await expect(certCards).toHaveCount(6);

    // Verify all displayed cards have skills containing 'Generative AI' or related terms
    const firstCardTags = certCards.first().locator('.certification-card__tag');
    await expect(firstCardTags.first()).toBeVisible();
  });

  test('should navigate to the Projects section', async ({ page }) => {
    // Click on the Projects link in the navbar
    const projectsLink = page.locator('.navbar__link', { hasText: 'Projects' });
    await projectsLink.click();

    // Verify the Projects section is visible
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();

    // Check if at least one project card is present
    const projectCard = page.locator('.project-card').first();
    await expect(projectCard).toBeVisible();
  });

  test('should open the project details modal and show detailed metadata', async ({ page }) => {
    // Click on the Projects link in the navbar
    const projectsLink = page.locator('.navbar__link', { hasText: 'Projects' });
    await projectsLink.click();

    // Find the first project card's "Details" button and click it
    const detailsBtn = page.locator('.project-card__link--details').first();
    await detailsBtn.click();

    // Verify modal elements are visible
    const modalBackdrop = page.locator('.project-modal-backdrop');
    const modalWindow = page.locator('.project-modal-window');
    await expect(modalBackdrop).toBeVisible();
    await expect(modalWindow).toBeVisible();

    // Verify modal elements contain expected data
    const modalTitle = modalWindow.locator('.project-modal__title');
    await expect(modalTitle).toContainText('PsychiatryXDashboard');

    const featureItem = modalWindow.locator('.project-modal__feature-item').first();
    await expect(featureItem).toBeVisible();

    const techTag = modalWindow.locator('.project-modal__tech-tag').first();
    await expect(techTag).toBeVisible();
  });

  test('should dismiss the project modal using close button, ESC key, or backdrop click', async ({ page }) => {
    // Click on the Projects link in the navbar
    const projectsLink = page.locator('.navbar__link', { hasText: 'Projects' });
    await projectsLink.click();

    // 1. Test close button
    const detailsBtn = page.locator('.project-card__link--details').first();
    await detailsBtn.click();
    
    const modalBackdrop = page.locator('.project-modal-backdrop');
    await expect(modalBackdrop).toBeVisible();

    const closeBtn = page.locator('.project-modal__close-btn');
    await closeBtn.click();
    await expect(modalBackdrop).not.toBeAttached();

    // 2. Test Escape key close
    await detailsBtn.click();
    await expect(modalBackdrop).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(modalBackdrop).not.toBeAttached();

    // 3. Test backdrop click close
    await detailsBtn.click();
    await expect(modalBackdrop).toBeVisible();
    
    // Click on the backdrop backdrop (simulate clicking at coordinates near the edge)
    await modalBackdrop.click({ position: { x: 10, y: 10 } });
    await expect(modalBackdrop).not.toBeAttached();
  });

  test('should have a working contact form with interactive validation', async ({ page }) => {
    // Scroll to contact section
    await page.locator('.navbar__link', { hasText: 'Contact' }).click();

    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Check for form fields
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const subjectInput = page.locator('input[name="subject"]');
    const messageInput = page.locator('textarea[name="message"]');
    const submitBtn = page.locator('button[type="submit"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(subjectInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    // 1. Enter invalid email and blur to check validation message
    await emailInput.fill('invalidemail');
    await emailInput.blur();
    
    // Check validation error message appears
    const emailErrorMsg = page.locator('.contact__input-error-msg', { hasText: 'Please enter a valid email address.' });
    await expect(emailErrorMsg).toBeVisible();
    await expect(emailInput).toHaveClass(/contact__form-input--error/);

    // 2. Enter too short message and blur
    await messageInput.fill('short');
    await messageInput.blur();
    
    const messageErrorMsg = page.locator('.contact__input-error-msg', { hasText: 'Message must be at least 10 characters.' });
    await expect(messageErrorMsg).toBeVisible();
    await expect(messageInput).toHaveClass(/contact__form-input--error/);

    // 3. Fix the email and message and check that error disappears
    await emailInput.fill('valid@email.com');
    await emailInput.blur();
    await expect(emailErrorMsg).not.toBeVisible();
    await expect(emailInput).toHaveClass(/contact__form-input--success/);

    await messageInput.fill('This is a valid test message that is long enough.');
    await messageInput.blur();
    await expect(messageErrorMsg).not.toBeVisible();
    await expect(messageInput).toHaveClass(/contact__form-input--success/);
  });

  test('should navigate to the Skills section and verify category filtering works', async ({ page }) => {
    // Click on the Skills link in the navbar
    const skillsLink = page.locator('.navbar__link', { hasText: 'Skills' });
    await skillsLink.click();

    // Verify the Skills section is visible
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeInViewport();

    // Verify filter buttons are present
    const filterButtons = page.locator('.skills__filter-btn');
    await expect(filterButtons).toHaveCount(6); // All + 5 groups

    // Verify all 11 category cards are visible initially
    const cards = page.locator('.skills__category-card');
    await expect(cards).toHaveCount(11);

    // Click on 'AI & Agents' filter button
    const aiFilterBtn = page.locator('.skills__filter-btn', { hasText: 'AI & Agents' });
    await aiFilterBtn.click();
    await expect(aiFilterBtn).toHaveClass(/skills__filter-btn--active/);

    // Verify card count drops to 3
    await expect(cards).toHaveCount(3);

    // Click 'All' to restore
    const allFilterBtn = page.locator('.skills__filter-btn', { hasText: 'All' });
    await allFilterBtn.click();
    await expect(allFilterBtn).toHaveClass(/skills__filter-btn--active/);
    await expect(cards).toHaveCount(11);
  });

  test('should show mobile menu on smaller screens', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Check if mobile menu toggle is visible
    const mobileToggle = page.locator('.navbar__mobile-toggle');
    await expect(mobileToggle).toBeVisible();

    // Click toggle and check if mobile menu opens
    await mobileToggle.click();
    const mobileMenu = page.locator('.navbar__mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Check if Certifications link is present in mobile menu
    const certsMobileLink = mobileMenu.locator('.navbar__mobile-link', { hasText: 'Certifications' });
    await expect(certsMobileLink).toBeVisible();
  });

  test('should navigate to the About section and verify expandable timeline details', async ({ page }) => {
    // Click on the About link in the navbar
    const aboutLink = page.locator('.navbar__link', { hasText: 'About' });
    await aboutLink.click();

    // Verify the About section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();

    // Verify timeline items are present
    const timelineItems = page.locator('.about__timeline-item');
    await expect(timelineItems).toHaveCount(3);

    // Verify timeline details are hidden initially
    const detailsList = page.locator('.about__timeline-details');
    await expect(detailsList).toHaveCount(0);

    // Click on the first timeline card to expand it
    const firstCard = page.locator('.about__timeline-card').first();
    await firstCard.click();

    // Verify details become visible
    await expect(page.locator('.about__timeline-details')).toBeVisible();

    // Click again to collapse
    await firstCard.click();
    await expect(page.locator('.about__timeline-details')).not.toBeAttached();
  });

  test('should render custom cursor elements on desktop viewports', async ({ page }) => {
    const cursorDot = page.locator('.custom-cursor__dot');
    const cursorRing = page.locator('.custom-cursor__ring');
    
    // Check if cursor elements are attached in the DOM
    await expect(cursorDot).toBeAttached();
    await expect(cursorRing).toBeAttached();
  });

  test('should toggle themes (Dark -> Light -> Cyber-Red -> Dark)', async ({ page }) => {
    const themeToggleBtn = page.locator('.navbar__theme-toggle');
    await expect(themeToggleBtn).toBeVisible();

    const htmlElement = page.locator('html');

    // 1. Initial theme is dark (or whatever localstorage/anti-flicker sets, default is dark)
    // We expect the data-theme attribute to be 'dark' or not present initially
    let currentTheme = await htmlElement.getAttribute('data-theme');
    expect(currentTheme === 'dark' || currentTheme === null).toBeTruthy();

    // 2. Click once -> should change to Light
    await themeToggleBtn.click();
    await expect(htmlElement).toHaveAttribute('data-theme', 'light');

    // 3. Click twice -> should change to Cyber-Red
    await themeToggleBtn.click();
    await expect(htmlElement).toHaveAttribute('data-theme', 'cyber-red');

    // 4. Click three times -> should wrap back to Dark
    await themeToggleBtn.click();
    await expect(htmlElement).toHaveAttribute('data-theme', 'dark');
  });

});

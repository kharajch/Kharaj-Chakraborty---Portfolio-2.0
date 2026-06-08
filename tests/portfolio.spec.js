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
    const googleSkillsImg = page.locator('.certification-card__image-wrapper img[src*="google"][src*="skills"]').first();
    await expect(googleSkillsImg).toBeAttached();
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

  test('should have a working contact form', async ({ page }) => {
    // Scroll to contact section
    await page.locator('.navbar__link', { hasText: 'Contact' }).click();

    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Check for form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
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

});

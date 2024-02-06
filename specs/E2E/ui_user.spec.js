import { test, expect } from '@playwright/test';
import config from '../../framework/config/config'

test('test reg', async ({ page }) => {
  await page.goto(config.baseUrl);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByPlaceholder('First Name').fill(config.firstname);
  await page.getByPlaceholder('Last Name').fill(config.lastname);
  await page.getByPlaceholder('Email').fill(config.email);
  await page.getByPlaceholder('Password').fill(config.password);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForURL(config.baseUrl + "/contactList")
  await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
});

test('test login ', async ({ page }) => {
  await page.goto(config.baseUrl);
  await page.getByPlaceholder('Email').fill(config.defemail);
  await page.getByPlaceholder('Password').fill(config.testpass);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForURL(config.baseUrl + "/contactList")
  await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
});

test('test logout ', async ({ page }) => {
  await page.goto(config.baseUrl);
  await page.getByPlaceholder('Email').fill(config.defemail);
  await page.getByPlaceholder('Password').fill(config.testpass);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForURL(config.baseUrl + "/contactList")
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.waitForURL(config.baseUrl)
  await expect(page.getByRole('heading', { name: 'Contact List App' })).toBeVisible();
});
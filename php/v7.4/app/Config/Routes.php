<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// Enable improved auto-routing (convenient for local/dev). Disable in production for security.
$routes->setAutoRoute(true);

// Make Dashboard the landing page
$routes->get('/', 'Dashboard::index');

// Visitor pages (web views)
$routes->get('visitors/all', 'VisitorsPage::all');
$routes->get('visitors/total', 'VisitorsPage::total');
$routes->get('visitors/add', 'VisitorsPage::add');

// Visitors resource routes
$routes->resource('visitors');

// Health check
$routes->get('health', 'Health::index');

// Dashboard
$routes->get('dashboard', 'Dashboard::index');

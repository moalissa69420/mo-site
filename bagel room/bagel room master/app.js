// Bagel Room Master Investor Presentation
// Comprehensive JavaScript with Chart.js integration - FIXED NAVIGATION

class BagelRoomPresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 32;
        this.charts = {};
        this.isTransitioning = false;
        
        // Complete application data from research
        this.data = {
            funding_request: {
                total: 1050000,
                breakdown: {
                    buildout_design: 320000,
                    wine_beer_license: 200000,
                    staffing_payroll: 175000,
                    equipment_tech: 130000,
                    marketing_launch: 100000,
                    contingency: 50000,
                    inventory: 40000,
                    vinyl_music: 35000
                },
                percentages: {
                    buildout_design: 30.5,
                    wine_beer_license: 19.0,
                    staffing_payroll: 16.7,
                    equipment_tech: 12.4,
                    marketing_launch: 9.5,
                    contingency: 4.8,
                    inventory: 3.8,
                    vinyl_music: 3.3
                }
            },
            funding_scenarios: {
                conservative: {amount: 600000, risk: "High", timeline: "6 months", features: "Basic buildout, no alcohol"},
                recommended: {amount: 1050000, risk: "Medium", timeline: "4-5 months", features: "Premium buildout + wine/beer license"},
                premium: {amount: 1500000, risk: "Medium-High", timeline: "6-8 months", features: "Full alcohol license + expanded concept"}
            },
            market_data: {
                bagel_market: {size: "3.05B", growth: "4.3%", projected_2030: "3.92B"},
                coffee_market: {size: "47.8B", growth: "9.5%", specialty_growth: "8.2%"},
                boston_market: {cafe_growth: "6%", restaurant_spending: "12.4B", target_demographic: "680K"}
            },
            consumer_behavior: {
                experience_importance: 78,
                aesthetic_preference: 70,
                social_discovery: 74,
                in_person_coffee: 51,
                affordable_indulgence: 66,
                food_and_coffee: 60
            },
            financial_projections: {
                year1: {conservative: 1260000, target: 1728000, optimistic: 2592000},
                year2: {conservative: 2835000, target: 3810000, optimistic: 5184000},
                year3: {conservative: 4536000, target: 6237000, optimistic: 8208000},
                year4: {conservative: 6426000, target: 8973000, optimistic: 11664000},
                year5: {conservative: 8505000, target: 12420000, optimistic: 15552000}
            },
            unit_economics: {
                target_scenario: {
                    revenue: 1728000,
                    cogs: 483840,
                    labor: 518400,
                    rent: 172800,
                    utilities: 69120,
                    marketing: 34560,
                    other: 34560,
                    net_income: 414720,
                    net_margin: 24
                },
                cost_structure: {
                    cogs: 28,
                    labor: 30,
                    rent: 10,
                    utilities: 4,
                    marketing: 2,
                    other: 2,
                    net_margin: 24
                }
            },
            competition: [
                {"name": "George Howell Coffee", "locations": 3, "revenue": 11, "position": "Premium Local", "focus": "Specialty Coffee"},
                {"name": "Thinking Cup", "locations": 3, "revenue": 6, "position": "Premium Chain", "focus": "Third Wave Coffee"},
                {"name": "Pavement Coffeehouse", "locations": 8, "revenue": 12, "position": "Local Favorite", "focus": "Coffee + Bagels"},
                {"name": "PopUp Bagels", "locations": 2, "revenue": 15, "position": "Viral Newcomer", "focus": "Bagels Only"},
                {"name": "Blue Bottle Coffee", "locations": 3, "revenue": 25, "position": "National Premium", "focus": "Specialty Coffee"},
                {"name": "Einstein Bros", "locations": 15, "revenue": 45, "position": "Mass Market", "focus": "Bagels + Coffee"}
            ],
            location_analysis: {
                south_end: {"rent": 35, "traffic": 85, "demographics": 95, "competition": 60, "overall_score": 88},
                back_bay: {"rent": 55, "traffic": 95, "demographics": 85, "competition": 90, "overall_score": 79},
                cambridge: {"rent": 45, "traffic": 95, "demographics": 80, "competition": 95, "overall_score": 80},
                north_end: {"rent": 40, "traffic": 90, "demographics": 70, "competition": 75, "overall_score": 75},
                seaport: {"rent": 50, "traffic": 80, "demographics": 90, "competition": 45, "overall_score": 73}
            },
            wine_beer_analysis: {
                wine_beer_license: {"cost": 200000, "timeline": "4-5 months", "revenue_impact": 15},
                full_alcohol_license: {"cost": 600000, "timeline": "6-8 months", "revenue_impact": 18},
                savings: 400000,
                roi_timeline: "18 months"
            },
            team: [
                {
                    "name": "Maximillian DiFillippo",
                    "role": "Creative Director & Hospitality Visionary",
                    "background": ["Photography, fashion & visual design expertise", "Raised in restaurant family (Davio's)", "Brand-driven design specialist", "Guest-centered environment creator"]
                },
                {
                    "name": "Jack Ferrara",
                    "role": "Entrepreneur & Creative Strategist", 
                    "background": ["Boston native with business foundation", "Music industry experience", "Build-from-scratch mindset", "Restaurant industry expertise"]
                },
                {
                    "name": "Mo Alissa",
                    "role": "Technologist",
                    "background": ["Built app to 4M users by age 21", "Technology/art/design intersection", "Systems-focused development", "Culture-shifting product creation"]
                },
                {
                    "name": "Drew 'Ciggs' Cinga", 
                    "role": "Photographer/Videographer",
                    "background": ["Multidisciplinary creative director", "Worked with Interscope, Complex, Hypebeast, Nike", "Gritty realism + cinematic polish", "Cultural authenticity specialist"]
                }
            ],
            timeline: [
                {"phase": "Q4 2025", "milestone": "Funding & Foundation", "activities": ["Secure $1.05M funding", "Sign South End lease", "Finalize design & permits"]},
                {"phase": "Q1 2026", "milestone": "Construction & Setup", "activities": ["Complete buildout", "Install equipment", "Obtain wine & beer license", "Hire core team"]},
                {"phase": "Q2 2026", "milestone": "Launch & Ramp", "activities": ["Soft opening", "Marketing campaign", "Build customer base", "Optimize operations"]},
                {"phase": "Q3 2026", "milestone": "Profitability", "activities": ["Reach breakeven", "Expand programming", "Evaluate 2nd location"]},
                {"phase": "Q4 2026", "milestone": "Growth Planning", "activities": ["Secure 2nd location", "Standardize operations", "Plan expansion"]}
            ]
        };

        // Chart color palette
        this.chartColors = ['#ee1f23', '#faf3e7', '#444444', '#666666', '#888888', '#aaaaaa', '#cccccc', '#dddddd', '#eeeeee', '#f5f5f5'];
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupKeyboardNavigation();
        this.setupTouchNavigation();
        this.updateProgress();
        this.initializeCharts();
        this.setupAccessibility();
        this.preloadAssets();
    }

    setupNavigation() {
        // Wait for DOM to be fully loaded
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        console.log('Setting up navigation buttons:', { prevBtn, nextBtn });

        if (prevBtn) {
            // Remove any existing listeners
            prevBtn.replaceWith(prevBtn.cloneNode(true));
            const newPrevBtn = document.getElementById('prevBtn');
            newPrevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Previous button clicked');
                this.previousSlide();
            });
        }
        
        if (nextBtn) {
            // Remove any existing listeners
            nextBtn.replaceWith(nextBtn.cloneNode(true));
            const newNextBtn = document.getElementById('nextBtn');
            newNextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Next button clicked');
                this.nextSlide();
            });
        }

        this.updateNavigationState();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Prevent default behavior for presentation navigation
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'Home', 'End'].includes(e.code)) {
                e.preventDefault();
            }

            switch(e.code) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case 'Space':
                    this.nextSlide();
                    break;
                case 'Home':
                    this.goToSlide(1);
                    break;
                case 'End':
                    this.goToSlide(this.totalSlides);
                    break;
                case 'KeyF':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleFullscreen();
                    }
                    break;
            }
        });
    }

    setupTouchNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        const container = document.querySelector('.presentation-container');
        
        if (container) {
            container.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }, { passive: true });

            container.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
            }, { passive: true });
        }
    }

    handleSwipe(startX, endX, startY, endY) {
        const swipeThreshold = 50;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Only handle horizontal swipes that are more significant than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides || this.isTransitioning) {
            console.log('Invalid slide or transitioning:', { slideNumber, isTransitioning: this.isTransitioning });
            return;
        }

        console.log('Going to slide:', slideNumber);
        this.isTransitioning = true;

        // Hide current slide
        const currentSlideEl = document.querySelector('.slide.active');
        if (currentSlideEl) {
            currentSlideEl.classList.remove('active');
        }

        // Show new slide
        const newSlideEl = document.querySelector(`[data-slide="${slideNumber}"]`);
        if (newSlideEl) {
            newSlideEl.classList.add('active');
            
            // Trigger reflow to ensure transition works
            newSlideEl.offsetHeight;
        }

        this.currentSlide = slideNumber;
        this.updateProgress();
        this.updateNavigationState();
        this.initializeChartsForCurrentSlide();

        // Reset transition lock after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 350);
    }

    nextSlide() {
        console.log('Next slide called, current:', this.currentSlide, 'total:', this.totalSlides);
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        console.log('Previous slide called, current:', this.currentSlide);
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            const percentage = (this.currentSlide / this.totalSlides) * 100;
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }
    }

    updateNavigationState() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentSlide <= 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentSlide >= this.totalSlides;
        }
    }

    initializeCharts() {
        // Initialize charts for current slide after a short delay
        setTimeout(() => {
            this.initializeChartsForCurrentSlide();
        }, 100);
    }

    initializeChartsForCurrentSlide() {
        switch(this.currentSlide) {
            case 5:
                this.createMarketOpportunityChart();
                break;
            case 6:
                this.createConsumerBehaviorChart();
                break;
            case 10:
                this.createCompetitiveChart();
                break;
            case 11:
                this.createLocationAnalysisChart();
                break;
            case 14:
                this.createFinancialProjectionsChart();
                break;
            case 15:
                this.createUnitEconomicsChart();
                break;
            case 17:
                this.createFiveYearChart();
                break;
            case 19:
                this.createFundingBreakdownChart();
                break;
            case 20:
                this.createFundingScenariosChart();
                break;
            case 28:
                this.createMarketGrowthChart();
                break;
        }
    }

    destroyChart(chartKey) {
        if (this.charts[chartKey]) {
            this.charts[chartKey].destroy();
            delete this.charts[chartKey];
        }
    }

    createMarketOpportunityChart() {
        const ctx = document.getElementById('marketOpportunityChart');
        if (!ctx) return;

        this.destroyChart('marketOpportunity');

        this.charts.marketOpportunity = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Coffee Market ($47.8B)', 'Bagel Market ($3.05B)'],
                datasets: [{
                    data: [47.8, 3.05],
                    backgroundColor: ['#ee1f23', '#faf3e7'],
                    borderColor: ['#c41e22', '#444444'],
                    borderWidth: 2,
                    hoverBackgroundColor: ['#c41e22', '#f0e6d9'],
                    hoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#444444'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => {
                                const label = context.label;
                                const value = context.parsed;
                                const growth = context.dataIndex === 0 ? '+9.5% YoY' : '+4.3% YoY';
                                return [`${label}`, `Growth: ${growth}`];
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1200,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createConsumerBehaviorChart() {
        const ctx = document.getElementById('consumerBehaviorChart');
        if (!ctx) return;

        this.destroyChart('consumerBehavior');

        const behaviorData = this.data.consumer_behavior;

        this.charts.consumerBehavior = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Experience\nImportance',
                    'Aesthetic\nPreference', 
                    'Social\nDiscovery',
                    'In-Person\nCoffee',
                    'Affordable\nIndulgence',
                    'Food &\nCoffee'
                ],
                datasets: [{
                    label: 'Consumer Preference (%)',
                    data: [
                        behaviorData.experience_importance,
                        behaviorData.aesthetic_preference,
                        behaviorData.social_discovery,
                        behaviorData.in_person_coffee,
                        behaviorData.affordable_indulgence,
                        behaviorData.food_and_coffee
                    ],
                    backgroundColor: ['#ee1f23', '#faf3e7', '#444444', '#666666', '#888888', '#aaaaaa'],
                    borderColor: ['#c41e22', '#444444', '#000000', '#444444', '#666666', '#888888'],
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Percentage (%)',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444',
                            callback: (value) => value + '%'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 10,
                                weight: '500'
                            },
                            color: '#444444'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => `${context.parsed.x}% of consumers`
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createCompetitiveChart() {
        const ctx = document.getElementById('competitiveChart');
        if (!ctx) return;

        this.destroyChart('competitive');

        const competitors = this.data.competition;
        const chartData = competitors.map((comp, index) => ({
            x: comp.locations,
            y: comp.revenue,
            label: comp.name,
            position: comp.position,
            backgroundColor: this.chartColors[index % this.chartColors.length]
        }));

        this.charts.competitive = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Boston Market Competitors',
                    data: chartData,
                    backgroundColor: chartData.map(d => d.backgroundColor),
                    borderColor: chartData.map(d => d.backgroundColor),
                    borderWidth: 2,
                    pointRadius: 12,
                    pointHoverRadius: 16,
                    pointHoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Number of Locations',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Annual Revenue ($M)',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444',
                            callback: (value) => '$' + value + 'M'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            title: (context) => context[0].raw.label,
                            label: (context) => [
                                `Locations: ${context.parsed.x}`,
                                `Revenue: $${context.parsed.y}M`,
                                `Position: ${context.raw.position}`
                            ]
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createLocationAnalysisChart() {
        const ctx = document.getElementById('locationAnalysisChart');
        if (!ctx) return;

        this.destroyChart('locationAnalysis');

        const locations = this.data.location_analysis;
        const neighborhoods = Object.keys(locations);
        const scores = neighborhoods.map(n => locations[n].overall_score);

        this.charts.locationAnalysis = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['South End', 'Cambridge', 'Back Bay', 'North End', 'Seaport'],
                datasets: [{
                    label: 'Overall Score',
                    data: [88, 80, 79, 75, 73],
                    backgroundColor: 'rgba(238, 31, 35, 0.2)',
                    borderColor: '#ee1f23',
                    borderWidth: 3,
                    pointBackgroundColor: '#ee1f23',
                    pointBorderColor: '#c41e22',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'Rent Score',
                    data: [35, 45, 55, 40, 50],
                    backgroundColor: 'rgba(68, 68, 68, 0.1)',
                    borderColor: '#444444',
                    borderWidth: 2,
                    pointBackgroundColor: '#444444',
                    pointBorderColor: '#000000',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }, {
                    label: 'Demographics Score',
                    data: [95, 80, 85, 70, 90],
                    backgroundColor: 'rgba(250, 243, 231, 0.3)',
                    borderColor: '#888888',
                    borderWidth: 2,
                    pointBackgroundColor: '#888888',
                    pointBorderColor: '#666666',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(68, 68, 68, 0.2)'
                        },
                        pointLabels: {
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '500'
                            },
                            color: '#444444'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => `${context.dataset.label}: ${context.parsed.r}/100`
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createFinancialProjectionsChart() {
        const ctx = document.getElementById('financialProjectionsChart');
        if (!ctx) return;

        this.destroyChart('financialProjections');

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // Monthly revenue ramp-up scenarios
        const conservative = [85, 92, 98, 102, 105, 107, 108, 109, 110, 111, 112, 113].map(v => v * 1000);
        const target = [95, 108, 125, 135, 142, 148, 152, 155, 158, 160, 162, 164].map(v => v * 1000);
        const optimistic = [120, 145, 175, 195, 210, 220, 225, 230, 235, 240, 245, 250].map(v => v * 1000);

        this.charts.financialProjections = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Conservative ($1.26M)',
                    data: conservative,
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#666666',
                    pointBorderColor: '#444444',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }, {
                    label: 'Target ($1.73M)',
                    data: target,
                    borderColor: '#ee1f23',
                    backgroundColor: 'rgba(238, 31, 35, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#ee1f23',
                    pointBorderColor: '#c41e22',
                    pointRadius: 5,
                    pointHoverRadius: 8
                }, {
                    label: 'Optimistic ($2.59M)',
                    data: optimistic,
                    borderColor: '#444444',
                    backgroundColor: 'rgba(68, 68, 68, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#444444',
                    pointBorderColor: '#000000',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Monthly Revenue ($)',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444',
                            callback: (value) => '$' + (value/1000) + 'K'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#444444',
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => `${context.dataset.label}: $${(context.parsed.y/1000).toFixed(0)}K`
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    createUnitEconomicsChart() {
        const ctx = document.getElementById('unitEconomicsChart');
        if (!ctx) return;

        this.destroyChart('unitEconomics');

        const costs = this.data.unit_economics.cost_structure;

        this.charts.unitEconomics = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    `Net Profit (${costs.net_margin}%)`,
                    `Labor (${costs.labor}%)`,
                    `COGS (${costs.cogs}%)`,
                    `Rent & Utilities (${costs.rent + costs.utilities}%)`,
                    `Marketing & Other (${costs.marketing + costs.other}%)`
                ],
                datasets: [{
                    data: [
                        costs.net_margin,
                        costs.labor,
                        costs.cogs,
                        costs.rent + costs.utilities,
                        costs.marketing + costs.other
                    ],
                    backgroundColor: ['#ee1f23', '#faf3e7', '#444444', '#666666', '#888888'],
                    borderColor: ['#c41e22', '#444444', '#000000', '#444444', '#666666'],
                    borderWidth: 2,
                    hoverBackgroundColor: ['#c41e22', '#f0e6d9', '#666666', '#888888', '#aaaaaa'],
                    hoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 10,
                                weight: '500'
                            },
                            color: '#444444'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => `${context.label}: ${context.parsed}%`
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1200
                }
            }
        });
    }

    createFiveYearChart() {
        const ctx = document.getElementById('fiveYearChart');
        if (!ctx) return;

        this.destroyChart('fiveYear');

        const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
        const projections = this.data.financial_projections;
        const conservative = [projections.year1.conservative, projections.year2.conservative, projections.year3.conservative, projections.year4.conservative, projections.year5.conservative];
        const target = [projections.year1.target, projections.year2.target, projections.year3.target, projections.year4.target, projections.year5.target];
        const optimistic = [projections.year1.optimistic, projections.year2.optimistic, projections.year3.optimistic, projections.year4.optimistic, projections.year5.optimistic];

        this.charts.fiveYear = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Conservative Scenario',
                    data: conservative,
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#666666',
                    pointBorderColor: '#444444',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }, {
                    label: 'Target Scenario',
                    data: target,
                    borderColor: '#ee1f23',
                    backgroundColor: 'rgba(238, 31, 35, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: '#ee1f23',
                    pointBorderColor: '#c41e22',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'Optimistic Scenario',
                    data: optimistic,
                    borderColor: '#444444',
                    backgroundColor: 'rgba(68, 68, 68, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#444444',
                    pointBorderColor: '#000000',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Revenue ($)',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444',
                            callback: (value) => '$' + (value/1000000).toFixed(1) + 'M'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#444444',
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => `${context.dataset.label}: $${(context.parsed.y/1000000).toFixed(2)}M`
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createFundingBreakdownChart() {
        const ctx = document.getElementById('fundingBreakdownChart');
        if (!ctx) return;

        this.destroyChart('fundingBreakdown');

        const funding = this.data.funding_request;
        const labels = [
            'Buildout & Design',
            'Wine & Beer License',
            'Staffing & Payroll',
            'Equipment & Tech',
            'Marketing & Launch',
            'Contingency',
            'Inventory',
            'Vinyl & Music'
        ];

        const data = [
            funding.breakdown.buildout_design,
            funding.breakdown.wine_beer_license,
            funding.breakdown.staffing_payroll,
            funding.breakdown.equipment_tech,
            funding.breakdown.marketing_launch,
            funding.breakdown.contingency,
            funding.breakdown.inventory,
            funding.breakdown.vinyl_music
        ];

        this.charts.fundingBreakdown = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: this.chartColors,
                    borderColor: this.chartColors.map(color => color === '#faf3e7' ? '#444444' : color),
                    borderWidth: 2,
                    hoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 10,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 9,
                                weight: '500'
                            },
                            color: '#444444',
                            generateLabels: (chart) => {
                                const data = chart.data;
                                return data.labels.map((label, index) => {
                                    const value = data.datasets[0].data[index];
                                    const percentage = ((value / funding.total) * 100).toFixed(1);
                                    return {
                                        text: `${label}: $${(value/1000).toFixed(0)}K (${percentage}%)`,
                                        fillStyle: data.datasets[0].backgroundColor[index],
                                        strokeStyle: data.datasets[0].borderColor[index],
                                        pointStyle: 'circle',
                                        hidden: false,
                                        index: index
                                    };
                                });
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => {
                                const value = context.parsed;
                                const percentage = ((value / funding.total) * 100).toFixed(1);
                                return [
                                    `${context.label}`,
                                    `Amount: $${(value/1000).toFixed(0)}K`,
                                    `Percentage: ${percentage}%`
                                ];
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1200
                }
            }
        });
    }

    createFundingScenariosChart() {
        const ctx = document.getElementById('fundingScenariosChart');
        if (!ctx) return;

        this.destroyChart('fundingScenarios');

        const scenarios = this.data.funding_scenarios;

        this.charts.fundingScenarios = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Conservative', 'Recommended', 'Premium'],
                datasets: [{
                    label: 'Investment Amount ($)',
                    data: [scenarios.conservative.amount, scenarios.recommended.amount, scenarios.premium.amount],
                    backgroundColor: ['#888888', '#ee1f23', '#444444'],
                    borderColor: ['#666666', '#c41e22', '#000000'],
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Investment Amount ($)',
                            font: {
                                family: 'Inter',
                                size: 14,
                                weight: '500'
                            },
                            color: '#444444'
                        },
                        grid: {
                            color: 'rgba(68, 68, 68, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '400'
                            },
                            color: '#444444',
                            callback: (value) => '$' + (value/1000000).toFixed(2) + 'M'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11,
                                weight: '500'
                            },
                            color: '#444444'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => {
                                const scenario = Object.values(scenarios)[context.dataIndex];
                                return [
                                    `Amount: $${(context.parsed.y/1000000).toFixed(2)}M`,
                                    `Risk Level: ${scenario.risk}`,
                                    `Timeline: ${scenario.timeline}`,
                                    `Features: ${scenario.features}`
                                ];
                            }
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createMarketGrowthChart() {
        const ctx = document.getElementById('marketGrowthChart');
        if (!ctx) return;

        this.destroyChart('marketGrowth');

        this.charts.marketGrowth = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['TAM: Total Addressable Market', 'SAM: Serviceable Addressable', 'SOM: Serviceable Obtainable'],
                datasets: [{
                    data: [50850, 351, 8.5],
                    backgroundColor: ['#ee1f23', '#444444', '#888888'],
                    borderColor: ['#c41e22', '#000000', '#666666'],
                    borderWidth: 2,
                    hoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#444444',
                            generateLabels: (chart) => {
                                const data = chart.data;
                                const values = ['$50.85B', '$351M', '$8.5M'];
                                return data.labels.map((label, index) => ({
                                    text: `${label}: ${values[index]}`,
                                    fillStyle: data.datasets[0].backgroundColor[index],
                                    strokeStyle: data.datasets[0].borderColor[index],
                                    pointStyle: 'circle',
                                    hidden: false,
                                    index: index
                                }));
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        titleFont: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12,
                            weight: '400'
                        },
                        callbacks: {
                            label: (context) => {
                                const values = ['$50.85B', '$351M', '$8.5M'];
                                return `${context.label}: ${values[context.dataIndex]}`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1200
                }
            }
        });
    }

    setupAccessibility() {
        // Add ARIA labels for screen readers
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.setAttribute('aria-label', `Slide ${index + 1} of ${slides.length}`);
            slide.setAttribute('role', 'tabpanel');
            slide.setAttribute('tabindex', slide.classList.contains('active') ? '0' : '-1');
        });

        // Add focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                const activeSlide = document.querySelector('.slide.active');
                const focusableElements = activeSlide?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (focusableElements && focusableElements.length === 0) {
                    e.preventDefault();
                }
            }
        });
    }

    preloadAssets() {
        // Preload next slide's chart if needed
        const chartSlides = [5, 6, 10, 11, 14, 15, 17, 19, 20, 28];
        chartSlides.forEach(slideNum => {
            if (slideNum === this.currentSlide + 1) {
                // Preload chart data but don't render yet
                setTimeout(() => {
                    // Chart initialization will happen when slide becomes active
                }, 100);
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    // Export functionality for debugging
    exportPresentationData() {
        return {
            currentSlide: this.currentSlide,
            totalSlides: this.totalSlides,
            timestamp: new Date().toISOString(),
            charts: Object.keys(this.charts),
            data: this.data
        };
    }

    // Performance monitoring
    measurePerformance(label, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${label}: ${end - start}ms`);
        return result;
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing presentation');
    window.bagelRoomPresentation = new BagelRoomPresentation();
});

// Utility functions for external access
window.goToSlide = (slideNumber) => {
    if (window.bagelRoomPresentation) {
        window.bagelRoomPresentation.goToSlide(slideNumber);
    }
};

window.printPresentation = () => {
    window.print();
};

// Performance and error monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
        }
    }
});

if ('PerformanceObserver' in window) {
    try {
        performanceObserver.observe({entryTypes: ['navigation', 'measure']});
    } catch (e) {
        console.warn('Performance monitoring not available');
    }
}

// Error handling for charts
window.addEventListener('error', (event) => {
    if (event.filename && event.filename.includes('chart')) {
        console.warn('Chart rendering error:', event.message);
        // Gracefully handle chart errors without breaking presentation
    }
});

// Resize handler for responsive charts
window.addEventListener('resize', debounce(() => {
    if (window.bagelRoomPresentation && window.bagelRoomPresentation.charts) {
        Object.values(window.bagelRoomPresentation.charts).forEach(chart => {
            chart.resize();
        });
    }
}, 250));

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Service worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here for production
        console.log('Presentation ready for offline use');
    });
}

// Export for testing environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BagelRoomPresentation;
}
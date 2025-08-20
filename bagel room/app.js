// Bagel Room Investor Presentation JavaScript

class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 28;
        this.charts = {};
        this.init();
    }

    init() {
        this.setupNavigation();
        this.updateSlideDisplay();
        this.initializeCharts();
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => this.previousSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        // Hide current slide
        const currentSlideEl = document.querySelector('.slide.active');
        if (currentSlideEl) currentSlideEl.classList.remove('active');

        // Show new slide
        const newSlideEl = document.querySelector(`[data-slide="${slideNumber}"]`);
        if (newSlideEl) newSlideEl.classList.add('active');

        this.currentSlide = slideNumber;
        this.updateSlideDisplay();
        this.updateCharts();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    updateSlideDisplay() {
        document.getElementById('currentSlide').textContent = this.currentSlide;
        document.getElementById('totalSlides').textContent = this.totalSlides;
    }

    updateCharts() {
        // Update charts when navigating to specific slides
        setTimeout(() => {
            switch(this.currentSlide) {
                case 4:
                    this.createKeyMetricsChart();
                    break;
                case 7:
                    this.createMarketSizeChart();
                    break;
                case 9:
                    this.createGrowthProjectionChart();
                    break;
                case 12:
                    this.createCompetitionChart();
                    break;
                case 16:
                    this.createRevenueChart();
                    break;
                case 17:
                    this.createUnitEconomicsChart();
                    break;
                case 18:
                    this.createFiveYearChart();
                    break;
                case 19:
                    this.createProfitabilityChart();
                    break;
                case 23:
                    this.createUseOfFundsChart();
                    break;
            }
        }, 100);
    }

    initializeCharts() {
        // Initialize charts when DOM is ready
        setTimeout(() => {
            this.createKeyMetricsChart();
        }, 500);
    }

    createKeyMetricsChart() {
        const ctx = document.getElementById('keyMetricsChart');
        if (!ctx) return;

        if (this.charts.keyMetrics) {
            this.charts.keyMetrics.destroy();
        }

        this.charts.keyMetrics = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Target Revenue', 'Break-even Time', 'ROI Timeline'],
                datasets: [{
                    data: [1728000, 10, 18],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 0
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
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label;
                                const value = context.parsed;
                                if (label === 'Target Revenue') return `${label}: $${(value/1000000).toFixed(1)}M`;
                                if (label === 'Break-even Time') return `${label}: ${value} months`;
                                if (label === 'ROI Timeline') return `${label}: ${value} months`;
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    createMarketSizeChart() {
        const ctx = document.getElementById('marketSizeChart');
        if (!ctx) return;

        if (this.charts.marketSize) {
            this.charts.marketSize.destroy();
        }

        this.charts.marketSize = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Coffee Market', 'Bagel Market'],
                datasets: [{
                    label: 'Market Size (Billions)',
                    data: [47.8, 3.05],
                    backgroundColor: ['#1FB8CD', '#FFC185'],
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
                            text: 'Market Size ($B)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.parsed.y}B`;
                            }
                        }
                    }
                }
            }
        });
    }

    createGrowthProjectionChart() {
        const ctx = document.getElementById('growthProjectionChart');
        if (!ctx) return;

        if (this.charts.growthProjection) {
            this.charts.growthProjection.destroy();
        }

        const years = [2025, 2026, 2027, 2028, 2029];
        const coffeeGrowth = [47.8, 52.3, 57.3, 62.7, 68.7];
        const bagelGrowth = [3.05, 3.18, 3.32, 3.46, 3.61];

        this.charts.growthProjection = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Coffee Market ($B)',
                    data: coffeeGrowth,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Bagel Market ($B)',
                    data: bagelGrowth,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4,
                    fill: true
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
                            text: 'Market Size ($B)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }

    createCompetitionChart() {
        const ctx = document.getElementById('competitionChart');
        if (!ctx) return;

        if (this.charts.competition) {
            this.charts.competition.destroy();
        }

        const competitors = ['George Howell', 'Thinking Cup', 'Pavement', 'PopUp Bagels', 'Einstein Bros'];
        const revenues = [11, 6, 12, 15, 45];
        const locations = [3, 3, 8, 2, 15];

        this.charts.competition = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Competitors',
                    data: competitors.map((name, i) => ({
                        x: locations[i],
                        y: revenues[i],
                        label: name
                    })),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    pointRadius: 8,
                    pointHoverRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Number of Locations'
                        },
                        beginAtZero: true
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Revenue ($M)'
                        },
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].raw.label;
                            },
                            label: function(context) {
                                return [`Locations: ${context.parsed.x}`, `Revenue: $${context.parsed.y}M`];
                            }
                        }
                    }
                }
            }
        });
    }

    createRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        if (this.charts.revenue) {
            this.charts.revenue.destroy();
        }

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const conservative = [85000, 92000, 98000, 102000, 105000, 107000, 108000, 109000, 110000, 111000, 112000, 113000];
        const target = [95000, 108000, 125000, 135000, 142000, 148000, 152000, 155000, 158000, 160000, 162000, 164000];
        const optimistic = [120000, 145000, 175000, 195000, 210000, 220000, 225000, 230000, 235000, 240000, 245000, 250000];

        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Conservative ($1.26M)',
                    data: conservative,
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Target ($1.73M)',
                    data: target,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                }, {
                    label: 'Optimistic ($2.59M)',
                    data: optimistic,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4
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
                            text: 'Monthly Revenue ($)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value/1000) + 'K';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }

    createUnitEconomicsChart() {
        const ctx = document.getElementById('unitEconomicsChart');
        if (!ctx) return;

        if (this.charts.unitEconomics) {
            this.charts.unitEconomics.destroy();
        }

        this.charts.unitEconomics = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Net Profit (24%)', 'Labor (32%)', 'COGS (28%)', 'Other (13%)', 'Rent (3%)'],
                datasets: [{
                    data: [24, 32, 28, 13, 3],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    borderWidth: 0
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
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    createFiveYearChart() {
        const ctx = document.getElementById('fiveYearChart');
        if (!ctx) return;

        if (this.charts.fiveYear) {
            this.charts.fiveYear.destroy();
        }

        const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
        const revenue = [1728000, 1987200, 2285280, 2628072, 3022283];
        const netProfit = [414720, 476928, 548467, 630737, 725348];

        this.charts.fiveYear = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    backgroundColor: '#1FB8CD',
                    borderRadius: 8,
                    yAxisID: 'y'
                }, {
                    label: 'Net Profit',
                    data: netProfit,
                    backgroundColor: '#FFC185',
                    borderRadius: 8,
                    yAxisID: 'y'
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
                            text: 'Amount ($)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value/1000000).toFixed(1) + 'M';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${(context.parsed.y/1000000).toFixed(2)}M`;
                            }
                        }
                    }
                }
            }
        });
    }

    createProfitabilityChart() {
        const ctx = document.getElementById('profitabilityChart');
        if (!ctx) return;

        if (this.charts.profitability) {
            this.charts.profitability.destroy();
        }

        const months = Array.from({length: 24}, (_, i) => `Month ${i + 1}`);
        const cashFlow = [
            -50000, -25000, 8500, 15000, 18000, 22000, 25000, 28000, 
            30000, 34500, 36000, 38000, 40000, 42000, 44000, 46000,
            48000, 50000, 52000, 54000, 56000, 58000, 60000, 62000
        ];

        this.charts.profitability = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months.slice(0, 18),
                datasets: [{
                    label: 'Monthly Cash Flow',
                    data: cashFlow.slice(0, 18),
                    borderColor: '#1FB8CD',
                    backgroundColor: function(context) {
                        const value = context.parsed ? context.parsed.y : 0;
                        return value >= 0 ? 'rgba(31, 184, 205, 0.2)' : 'rgba(180, 65, 60, 0.2)';
                    },
                    tension: 0.4,
                    fill: 'origin'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Cash Flow ($)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value/1000) + 'K';
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Timeline'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createUseOfFundsChart() {
        const ctx = document.getElementById('useOfFundsChart');
        if (!ctx) return;

        if (this.charts.useOfFunds) {
            this.charts.useOfFunds.destroy();
        }

        this.charts.useOfFunds = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Buildout & Equipment (45%)', 'Licensing & Legal (20%)', 'Working Capital (20%)', 'Marketing & Launch (15%)'],
                datasets: [{
                    data: [472500, 210000, 210000, 157500],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderWidth: 0
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
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const percentage = ((value / 1050000) * 100).toFixed(0);
                                return `${context.label}: $${(value/1000).toFixed(0)}K (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
});

// Print functionality
function printPresentation() {
    window.print();
}

// Export functionality (placeholder)
function exportPresentation() {
    alert('Export functionality would be implemented here for PDF generation');
}

// Utility functions for smooth animations
function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = performance.now();
    
    function animate(currentTime) {
        let elapsed = currentTime - start;
        let progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = progress;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 1;
        }
    }
    
    requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
    let start = performance.now();
    let startOpacity = parseFloat(getComputedStyle(element).opacity);
    
    function animate(currentTime) {
        let elapsed = currentTime - start;
        let progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = startOpacity * (1 - progress);
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(animate);
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
            document.dispatchEvent(event);
        } else {
            // Swipe right - previous slide
            const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
            document.dispatchEvent(event);
        }
    }
}

// Performance monitoring
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Lazy load charts when slides become visible
            const slideNumber = parseInt(entry.target.getAttribute('data-slide'));
            // Chart initialization logic would go here for performance optimization
        }
    });
});

// Observe all slides for performance optimization
document.querySelectorAll('.slide').forEach(slide => {
    observer.observe(slide);
});
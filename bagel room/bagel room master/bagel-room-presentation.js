// Bagel Room Investor Presentation JavaScript

class BagelRoomPresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 5; // Adjust based on actual number of slides
        this.charts = {};

        this.data = {
            market: {
                bagel_market: 3.05,
                coffee_market: 47.8,
                growth_rate: 6
            },
            financial: {
                conservative: 1.26,
                target: 1.73,
                optimistic: 2.59
            },
            funding: {
                buildout: 320000,
                license: 200000,
                staffing: 175000,
                equipment: 130000,
                marketing: 100000,
                contingency: 50000,
                inventory: 40000,
                vinyl: 35000
            }
        };

        this.init();
    }

    init() {
        this.setupNavigation();
        this.updateSlideDisplay();
        this.setupKeyboardNavigation();
        this.initializeCharts();
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.previousSlide());
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
            }
        });
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        // Hide current slide
        const currentSlide = document.querySelector('.slide.active');
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }

        // Show new slide
        const newSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
        if (newSlide) {
            newSlide.classList.add('active');
        }

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
        const counter = document.getElementById('slideCounter');
        const progressFill = document.getElementById('progressFill');

        if (counter) {
            counter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }

        if (progressFill) {
            const progress = (this.currentSlide / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    initializeCharts() {
        // Initialize charts when DOM is ready
        setTimeout(() => {
            this.createMarketChart();
            this.createFinancialChart();
            this.createFundingChart();
        }, 100);
    }

    updateCharts() {
        // Update charts based on current slide
        switch(this.currentSlide) {
            case 3:
                this.createMarketChart();
                break;
            case 4:
                this.createFinancialChart();
                break;
            case 5:
                this.createFundingChart();
                break;
        }
    }

    createMarketChart() {
        const canvas = document.getElementById('marketChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        if (this.charts.marketChart) {
            this.charts.marketChart.destroy();
        }

        this.charts.marketChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Bagel Market', 'Coffee Market', 'Boston Opportunity'],
                datasets: [{
                    data: [3.05, 47.8, 2.1],
                    backgroundColor: ['#ee1f23', '#444444', '#faf3e7'],
                    borderColor: '#ffffff',
                    borderWidth: 3
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
                            font: {
                                family: 'Inter',
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': $' + context.parsed + 'B';
                            }
                        }
                    }
                }
            }
        });
    }

    createFinancialChart() {
        const canvas = document.getElementById('financialChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        if (this.charts.financialChart) {
            this.charts.financialChart.destroy();
        }

        this.charts.financialChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Conservative', 'Target', 'Optimistic'],
                datasets: [{
                    label: 'Revenue ($M)',
                    data: [1.26, 1.73, 2.59],
                    backgroundColor: ['#faf3e7', '#ee1f23', '#444444'],
                    borderColor: '#ffffff',
                    borderWidth: 2
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
                            text: 'Revenue ($M)'
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

    createFundingChart() {
        const canvas = document.getElementById('fundingChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        if (this.charts.fundingChart) {
            this.charts.fundingChart.destroy();
        }

        const funding = this.data.funding;
        const labels = Object.keys(funding).map(key => 
            key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        );
        const data = Object.values(funding);

        this.charts.fundingChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Buildout', 'License', 'Staffing', 'Equipment', 'Marketing', 'Other'],
                datasets: [{
                    data: [320, 200, 175, 130, 100, 125], // in thousands
                    backgroundColor: [
                        '#ee1f23', '#444444', '#faf3e7', '#888888',
                        '#ee1f2380', '#44444480'
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3
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
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': $' + context.parsed + 'K (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    // Utility methods
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(amount);
    }

    exportData() {
        return JSON.stringify(this.data, null, 2);
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new BagelRoomPresentation();

    // Handle window resize
    window.addEventListener('resize', () => {
        Object.values(presentation.charts).forEach(chart => {
            if (chart && chart.resize) {
                chart.resize();
            }
        });
    });

    // Make available globally for debugging
    window.bagelRoomPresentation = presentation;
});
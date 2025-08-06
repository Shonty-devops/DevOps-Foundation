// Quote of the Day Web App
class QuoteApp {
    constructor() {
        this.quotes = [];
        this.currentQuote = null;
        this.favorites = this.loadFavorites();
        this.quotesViewed = this.loadQuotesViewed();
        this.init();
    }

    init() {
        this.loadQuotes();
        this.bindEvents();
        this.updateStats();
        this.displayRandomQuote();
    }

    loadQuotes() {
        // Curated collection of inspiring quotes
        this.quotes = [
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                text: "Innovation distinguishes between a leader and a follower.",
                author: "Steve Jobs"
            },
            {
                text: "Life is what happens to you while you're busy making other plans.",
                author: "John Lennon"
            },
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "It is during our darkest moments that we must focus to see the light.",
                author: "Aristotle"
            },
            {
                text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill"
            },
            {
                text: "The only impossible journey is the one you never begin.",
                author: "Tony Robbins"
            },
            {
                text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
                author: "Martin Luther King Jr."
            },
            {
                text: "The best time to plant a tree was 20 years ago. The second best time is now.",
                author: "Chinese Proverb"
            },
            {
                text: "Your limitation—it's only your imagination.",
                author: "Unknown"
            },
            {
                text: "Push yourself, because no one else is going to do it for you.",
                author: "Unknown"
            },
            {
                text: "Great things never come from comfort zones.",
                author: "Unknown"
            },
            {
                text: "Dream it. Wish it. Do it.",
                author: "Unknown"
            },
            {
                text: "Success doesn't just find you. You have to go out and get it.",
                author: "Unknown"
            },
            {
                text: "The harder you work for something, the greater you'll feel when you achieve it.",
                author: "Unknown"
            },
            {
                text: "Dream bigger. Do bigger.",
                author: "Unknown"
            },
            {
                text: "Don't stop when you're tired. Stop when you're done.",
                author: "Unknown"
            },
            {
                text: "Wake up with determination. Go to bed with satisfaction.",
                author: "Unknown"
            },
            {
                text: "Do something today that your future self will thank you for.",
                author: "Sean Patrick Flanery"
            },
            {
                text: "Little things make big days.",
                author: "Unknown"
            },
            {
                text: "It's going to be hard, but hard does not mean impossible.",
                author: "Unknown"
            },
            {
                text: "Don't wait for opportunity. Create it.",
                author: "Unknown"
            },
            {
                text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
                author: "Unknown"
            },
            {
                text: "The key to success is to focus on goals, not obstacles.",
                author: "Unknown"
            },
            {
                text: "Dream it. Believe it. Build it.",
                author: "Unknown"
            },
            {
                text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                author: "Ralph Waldo Emerson"
            },
            {
                text: "Be yourself; everyone else is already taken.",
                author: "Oscar Wilde"
            },
            {
                text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                author: "Albert Einstein"
            },
            {
                text: "So many books, so little time.",
                author: "Frank Zappa"
            },
            {
                text: "A room without books is like a body without a soul.",
                author: "Marcus Tullius Cicero"
            },
            {
                text: "You only live once, but if you do it right, once is enough.",
                author: "Mae West"
            },
            {
                text: "Be the change that you wish to see in the world.",
                author: "Mahatma Gandhi"
            },
            {
                text: "In three words I can sum up everything I've learned about life: it goes on.",
                author: "Robert Frost"
            },
            {
                text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
                author: "J.K. Rowling"
            },
            {
                text: "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.",
                author: "Albert Camus"
            },
            {
                text: "If you tell the truth, you don't have to remember anything.",
                author: "Mark Twain"
            },
            {
                text: "Friendship is born at that moment when one person says to another: What! You too? I thought I was the only one.",
                author: "C.S. Lewis"
            },
            {
                text: "A friend is someone who knows all about you and still loves you.",
                author: "Elbert Hubbard"
            },
            {
                text: "To live is the rarest thing in the world. Most people just exist.",
                author: "Oscar Wilde"
            },
            {
                text: "That which does not kill us makes us stronger.",
                author: "Friedrich Nietzsche"
            },
            {
                text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                author: "Mahatma Gandhi"
            },
            {
                text: "We accept the love we think we deserve.",
                author: "Stephen Chbosky"
            },
            {
                text: "Without music, life would be a mistake.",
                author: "Friedrich Nietzsche"
            },
            {
                text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
                author: "Oscar Wilde"
            },
            {
                text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                author: "Ralph Waldo Emerson"
            },
            {
                text: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently.",
                author: "Steve Jobs"
            },
            {
                text: "Insanity is doing the same thing, over and over again, but expecting different results.",
                author: "Albert Einstein"
            },
            {
                text: "I have not failed. I've just found 10,000 ways that won't work.",
                author: "Thomas A. Edison"
            },
            {
                text: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "A day without sunshine is like, you know, night.",
                author: "Steve Martin"
            }
        ];
    }

    bindEvents() {
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        const shareBtn = document.getElementById('shareBtn');
        const favoriteBtn = document.getElementById('favoriteBtn');
        const closeModal = document.getElementById('closeModal');
        const shareTwitter = document.getElementById('shareTwitter');
        const shareFacebook = document.getElementById('shareFacebook');
        const copyQuote = document.getElementById('copyQuote');
        const modal = document.getElementById('shareModal');

        newQuoteBtn.addEventListener('click', () => this.displayRandomQuote());
        shareBtn.addEventListener('click', () => this.openShareModal());
        favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        closeModal.addEventListener('click', () => this.closeShareModal());
        shareTwitter.addEventListener('click', () => this.shareToTwitter());
        shareFacebook.addEventListener('click', () => this.shareToFacebook());
        copyQuote.addEventListener('click', () => this.copyQuoteText());

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeShareModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeShareModal();
            }
        });

        // Auto-refresh quote daily
        this.checkDailyQuote();
        setInterval(() => this.checkDailyQuote(), 60000); // Check every minute
    }

    displayRandomQuote() {
        const quoteCard = document.querySelector('.quote-card');
        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');

        // Add loading animation
        quoteCard.classList.add('quote-loading');

        setTimeout(() => {
            // Get random quote
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.currentQuote = this.quotes[randomIndex];

            // Update display
            quoteText.textContent = this.currentQuote.text;
            quoteAuthor.textContent = this.currentQuote.author;

            // Update favorite button state
            this.updateFavoriteButton();

            // Remove loading and add entering animation
            quoteCard.classList.remove('quote-loading');
            quoteCard.classList.add('quote-entering');

            setTimeout(() => {
                quoteCard.classList.remove('quote-entering');
            }, 500);

            // Update stats
            this.quotesViewed++;
            this.saveQuotesViewed();
            this.updateStats();

        }, 300);
    }

    toggleFavorite() {
        if (!this.currentQuote) return;

        const quoteId = this.getQuoteId(this.currentQuote);
        const favoriteBtn = document.getElementById('favoriteBtn');
        const icon = favoriteBtn.querySelector('i');

        if (this.favorites.includes(quoteId)) {
            // Remove from favorites
            this.favorites = this.favorites.filter(id => id !== quoteId);
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.showNotification('Removed from favorites', 'info');
        } else {
            // Add to favorites
            this.favorites.push(quoteId);
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.showNotification('Added to favorites!', 'success');
        }

        this.saveFavorites();
        this.updateStats();

        // Add animation
        favoriteBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            favoriteBtn.style.transform = 'scale(1)';
        }, 200);
    }

    updateFavoriteButton() {
        if (!this.currentQuote) return;

        const quoteId = this.getQuoteId(this.currentQuote);
        const favoriteBtn = document.getElementById('favoriteBtn');
        const icon = favoriteBtn.querySelector('i');

        if (this.favorites.includes(quoteId)) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }

    openShareModal() {
        const modal = document.getElementById('shareModal');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeShareModal() {
        const modal = document.getElementById('shareModal');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    shareToTwitter() {
        if (!this.currentQuote) return;

        const text = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        const hashtags = 'QuoteOfTheDay,Inspiration,Motivation';
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=${hashtags}`;
        
        window.open(url, '_blank', 'width=600,height=400');
        this.closeShareModal();
    }

    shareToFacebook() {
        if (!this.currentQuote) return;

        const text = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
        
        window.open(url, '_blank', 'width=600,height=400');
        this.closeShareModal();
    }

    async copyQuoteText() {
        if (!this.currentQuote) return;

        const text = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Quote copied to clipboard!', 'success');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Quote copied to clipboard!', 'success');
        }
        
        this.closeShareModal();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: type === 'success' ? '#48bb78' : '#667eea',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-out',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    updateStats() {
        document.getElementById('quotesViewed').textContent = this.quotesViewed;
        document.getElementById('favoriteCount').textContent = this.favorites.length;
    }

    checkDailyQuote() {
        const today = new Date().toDateString();
        const lastQuoteDate = localStorage.getItem('lastQuoteDate');

        if (lastQuoteDate !== today) {
            // New day, show a special daily quote
            localStorage.setItem('lastQuoteDate', today);
            if (lastQuoteDate) { // Don't show notification on first visit
                this.showNotification('New day, new inspiration awaits!', 'success');
            }
        }
    }

    getQuoteId(quote) {
        return btoa(quote.text + quote.author).replace(/[^a-zA-Z0-9]/g, '');
    }

    loadFavorites() {
        const saved = localStorage.getItem('quoteAppFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('quoteAppFavorites', JSON.stringify(this.favorites));
    }

    loadQuotesViewed() {
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem('quotesViewedDate');
        
        if (savedDate === today) {
            return parseInt(localStorage.getItem('quotesViewed') || '0');
        } else {
            // New day, reset counter
            localStorage.setItem('quotesViewedDate', today);
            localStorage.setItem('quotesViewed', '0');
            return 0;
        }
    }

    saveQuotesViewed() {
        const today = new Date().toDateString();
        localStorage.setItem('quotesViewedDate', today);
        localStorage.setItem('quotesViewed', this.quotesViewed.toString());
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuoteApp();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            document.getElementById('newQuoteBtn').click();
        }
        if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            document.getElementById('shareBtn').click();
        }
        if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            document.getElementById('favoriteBtn').click();
        }
    });

    // Add hover effects for better UX
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click ripple effect
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
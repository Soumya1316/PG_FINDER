// PG Data
const pgData = [
    {
        id: 1,
        name: "Sunshine PG",
        location: "Dhankawadi",
        address: "123 College Road, Dhankawadi, Pune - 411043",
        distance: 0.8,
        price: 8000,
        rating: 4.5,
        type: "girls",
        roomTypes: ["single", "double"],
        foodType: "veg",
        safetyRating: 4.8,
        amenities: ["wifi", "hot-water", "laundry", "study-table"],
        images: [
            "images/Untitled.png",
            "images/6.jpg",
            "images/pgphoto.png"
        ],
        description: "Sunshine PG offers comfortable accommodation for female students near PICT. With a focus on safety and comfort, we provide clean rooms, nutritious vegetarian food, and a conducive environment for studies.",
        features: ["Mess Included", "WiFi", "High Security"],
        rules: [
            "Entry time: Before 10:00 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness",
            "Noise restrictions after 11:00 PM"
        ],
        foodMenu: {
            breakfast: "Poha/Upma/Idli, Tea/Coffee",
            lunch: "Roti, Rice, Dal, Sabzi, Salad",
            dinner: "Roti, Rice, Dal, Sabzi, Sweet (twice a week)"
        },
        contactPerson: "Mrs. Sharma",
        contactNumber: "+91 98765 43210",
        contactEmail: "sunshine.pg@example.com"
    },
    {
        id: 2,
        name: "Royal Residency",
        location: "Katraj",
        address: "45 Main Street, Katraj, Pune - 411046",
        distance: 1.2,
        price: 10000,
        rating: 4.2,
        type: "boys",
        roomTypes: ["single", "double", "triple"],
        foodType: "both",
        safetyRating: 4.5,
        amenities: ["wifi", "ac", "hot-water", "laundry"],
        images: [
            "images/1.jpg",
            "images/10.jpg",
            "images/11.jpg"
        ],
        description: "Royal Residency is a premium PG accommodation for male students near PICT. We offer air-conditioned rooms, gym facilities, and both vegetarian and non-vegetarian food options.",
        features: ["AC Rooms", "Food Included", "24/7 Security"],
        rules: [
            "Entry time: Before 11:00 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness",
            "Noise restrictions after 11:00 PM"
        ],
        foodMenu: {
            breakfast: "Poha/Upma/Idli/Paratha, Tea/Coffee",
            lunch: "Roti, Rice, Dal, Sabzi, Salad, Non-veg (twice a week)",
            dinner: "Roti, Rice, Dal, Sabzi, Sweet (twice a week), Non-veg (twice a week)"
        },
        contactPerson: "Mr. Patel",
        contactNumber: "+91 98765 12345",
        contactEmail: "royal.residency@example.com"
    },
    {
        id: 3,
        name: "Student Haven",
        location: "Bibwewadi",
        address: "78 College Lane, Bibwewadi, Pune - 411037",
        distance: 1.5,
        price: 7500,
        rating: 4.0,
        type: "co-ed",
        roomTypes: ["double", "triple"],
        foodType: "non-veg",
        safetyRating: 4.0,
        amenities: ["wifi", "laundry", "study-table"],
        images: [
            "images/18.webp",
            "images/19.jpeg",
            "images/21.jpg"
        ],
        description: "Student Haven provides affordable accommodation for students with a focus on comfort and convenience. Located in Bibwewadi, it's a short distance from PICT and offers all essential amenities.",
        features: ["Laundry Service", "Study Room", "WiFi"],
        rules: [
            "Entry time: Before 10:30 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness"
        ],
        foodMenu: {
            breakfast: "Bread/Omelette/Poha, Tea/Coffee",
            lunch: "Roti, Rice, Dal, Sabzi, Salad, Non-veg (thrice a week)",
            dinner: "Roti, Rice, Dal, Sabzi, Non-veg (twice a week)"
        },
        contactPerson: "Mr. Desai",
        contactNumber: "+91 98765 67890",
        contactEmail: "student.haven@example.com"
    },
    {
        id: 4,
        name: "Campus Corner PG",
        location: "Dhankawadi",
        address: "56 College View, Dhankawadi, Pune - 411043",
        distance: 0.5,
        price: 9500,
        rating: 4.7,
        type: "girls",
        roomTypes: ["single", "double"],
        foodType: "veg",
        safetyRating: 4.9,
        amenities: ["wifi", "ac", "hot-water", "laundry"],
        images: [
            "images/14.webp",
            "images/15.avif",
            "images/16.avif"
        ],
        description: "Campus Corner PG is the closest accommodation to PICT, offering premium facilities for female students. With high safety standards and excellent food, it's a home away from home.",
        features: ["AC Rooms", "WiFi", "Gym Access"],
        rules: [
            "Entry time: Before 10:00 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness",
            "Noise restrictions after 10:00 PM"
        ],
        foodMenu: {
            breakfast: "Idli/Dosa/Poha/Upma, Tea/Coffee, Fruits",
            lunch: "Roti, Rice, Dal, 2 Sabzi, Salad, Curd",
            dinner: "Roti, Rice, Dal, Sabzi, Sweet (thrice a week)"
        },
        contactPerson: "Mrs. Joshi",
        contactNumber: "+91 98765 54321",
        contactEmail: "campus.corner@example.com"
    },
    {
        id: 5,
        name: "Scholar's Nest",
        location: "Katraj",
        address: "23 Study Lane, Katraj, Pune - 411046",
        distance: 1.8,
        price: 6500,
        rating: 3.8,
        type: "boys",
        roomTypes: ["double", "triple"],
        foodType: "both",
        safetyRating: 3.5,
        amenities: ["wifi", "study-table"],
        images: [
            "images/3.jpg",
            "images/4.jpg",
            "images/7.jpg"
        ],
        description: "Scholar's Nest is a budget-friendly option for male students. While basic in amenities, it provides a quiet environment for studies and is well-connected to PICT.",
        features: ["WiFi", "Study Tables", "Laundry"],
        rules: [
            "Entry time: Before 11:00 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness"
        ],
        foodMenu: {
            breakfast: "Poha/Upma/Bread, Tea/Coffee",
            lunch: "Roti, Rice, Dal, Sabzi, Salad",
            dinner: "Roti, Rice, Dal, Sabzi, Non-veg (once a week)"
        },
        contactPerson: "Mr. Kumar",
        contactNumber: "+91 98765 98765",
        contactEmail: "scholars.nest@example.com"
    },
    {
        id: 6,
        name: "Comfort Zone PG",
        location: "Kondhwa",
        address: "89 Luxury Avenue, Kondhwa, Pune - 411048",
        distance: 2.5,
        price: 11000,
        rating: 4.6,
        type: "co-ed",
        roomTypes: ["single", "double"],
        foodType: "both",
        safetyRating: 4.7,
        amenities: ["wifi", "ac", "hot-water", "laundry"],
        images: [
            "images/12.avif",
            "images/2.jpg",
            "images/13.jpg"
        ],
        description: "Comfort Zone PG offers luxury accommodation for students who want the best facilities. With AC rooms, swimming pool, and premium food options, it's the perfect choice for those seeking comfort.",
        features: ["AC Rooms", "Food Included", "Swimming Pool"],
        rules: [
            "Entry time: Before 11:00 PM",
            "No smoking or alcohol",
            "Visitors allowed only in common areas",
            "Maintain cleanliness",
            "Noise restrictions after 11:00 PM"
        ],
        foodMenu: {
            breakfast: "Continental/Indian options, Tea/Coffee/Juice",
            lunch: "Roti, Rice, Dal, 2 Sabzi, Salad, Dessert",
            dinner: "Roti, Rice, Dal, Sabzi, Non-veg (thrice a week), Dessert"
        },
        contactPerson: "Mr. Singh",
        contactNumber: "+91 98765 23456",
        contactEmail: "comfort.zone@example.com"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Price Range Slider
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = '₹' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
    }
    
    // Distance Slider
    const distanceRange = document.getElementById('distance');
    const distanceValue = document.getElementById('distance-value');
    
    if (distanceRange && distanceValue) {
        distanceRange.addEventListener('input', function() {
            distanceValue.textContent = this.value + ' km';
        });
    }
    
    // Search Button
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            filterPGs();
        });
    }
    
    // Reset Button
    const resetBtn = document.getElementById('reset-btn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            resetFilters();
        });
    }
    
    // View Details Buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const pgId = parseInt(this.getAttribute('data-id'));
            openPGDetails(pgId);
        });
    });
    
    // Close Modal
    const closeModal = document.querySelector('.close-modal');
    const modal = document.getElementById('pg-modal');
    
    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    /* Testimonial Slider
    const prevTestimonial = document.getElementById('prev-testimonial');
    const nextTestimonial = document.getElementById('next-testimonial');
    const testimonialContainer = document.getElementById('testimonial-container');
    const dots = document.querySelectorAll('.dot');
    
    let currentTestimonial = 0;
    
    if (prevTestimonial && nextTestimonial && testimonialContainer) {
        prevTestimonial.addEventListener('click', function() {
            if (currentTestimonial > 0) {
                currentTestimonial--;
            } else {
                currentTestimonial = 2;
            }
            updateTestimonial();
        });
        
        nextTestimonial.addEventListener('click', function() {
            if (currentTestimonial < 2) {
                currentTestimonial++;
            } else {
                currentTestimonial = 0;
            }
            updateTestimonial();
        });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentTestimonial = index;
                updateTestimonial();
            });
        });
        
        function updateTestimonial() {
            testimonialContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            
            dots.forEach((dot, index) => {
                if (index === currentTestimonial) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Auto slide testimonials
        setInterval(function() {
            if (currentTestimonial < 2) {
                currentTestimonial++;
            } else {
                currentTestimonial = 0;
            }
            updateTestimonial();
        }, 5000);
    }*/
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Initialize PG Listings
    initializePGListings();
});

// Initialize PG Listings
function initializePGListings() {
    const pgListingsContainer = document.getElementById('pg-listings');
    
    if (pgListingsContainer) {
        pgListingsContainer.innerHTML = '';
        
        pgData.forEach(pg => {
            const pgCard = createPGCard(pg);
            pgListingsContainer.appendChild(pgCard);
        });
        
        updateResultsCount(pgData.length);
    }
}

// Create PG Card
function createPGCard(pg) {
    const pgCard = document.createElement('div');
    pgCard.className = 'pg-card';
    
    let pgTypeLabel = '';
    let pgTypeClass = '';
    
    if (pg.type === 'boys') {
        pgTypeLabel = 'Boys';
        pgTypeClass = 'boys';
    } else if (pg.type === 'girls') {
        pgTypeLabel = 'Girls';
        pgTypeClass = 'girls';
    } else {
        pgTypeLabel = 'Co-ed';
        pgTypeClass = 'coed';
    }
    
    pgCard.innerHTML = `
        <div class="pg-image">
            <img src="${pg.images[0]}" alt="${pg.name}">
            <div class="pg-badge ${pgTypeClass}">${pgTypeLabel}</div>
        </div>
        <div class="pg-details">
            <h3>${pg.name}</h3>
            <div class="pg-location">
                <i class="icon-location"></i>
                <span>${pg.location}, ${pg.distance} km from PICT</span>
            </div>
            <div class="pg-rating">
                <i class="icon-star"></i>
                <span>${pg.rating}</span>
            </div>
            <div class="pg-features">
                ${pg.features.map(feature => `<span class="feature"><i class="icon-${getFeatureIcon(feature)}"></i> ${feature}</span>`).join('')}
            </div>
            <div class="pg-price">₹${pg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/month</div>
            <a href="#" class="btn btn-secondary view-details" data-id="${pg.id}">View Details</a>
        </div>
    `;
    
    // Add event listener to view details button
    pgCard.querySelector('.view-details').addEventListener('click', function(e) {
        e.preventDefault();
        openPGDetails(pg.id);
    });
    
    return pgCard;
}

// Get Feature Icon
function getFeatureIcon(feature) {
    if (feature.includes('WiFi')) return 'wifi';
    if (feature.includes('AC')) return 'ac';
    if (feature.includes('Food') || feature.includes('Mess')) return 'food';
    if (feature.includes('Security')) return 'security';
    if (feature.includes('Laundry')) return 'laundry';
    return 'check';
}

// Filter PGs
function filterPGs() {
    const location = document.getElementById('location').value;
    const maxPrice = parseInt(document.getElementById('price-range').value);
    const maxDistance = parseFloat(document.getElementById('distance').value);
    const pgType = document.getElementById('pg-type').value;
    const foodType = document.getElementById('food-type').value;
    const roomType = document.getElementById('room-type').value;
    const minSafety = parseFloat(document.getElementById('safety').value);
    
    const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
    const selectedAmenities = Array.from(amenitiesCheckboxes).map(checkbox => checkbox.value);
    
    const filteredPGs = pgData.filter(pg => {
        // Filter by location
        if (location !== 'all' && pg.location.toLowerCase() !== location.toLowerCase()) {
            return false;
        }
        
        // Filter by price
        if (pg.price > maxPrice) {
            return false;
        }
        
        // Filter by distance
        if (pg.distance > maxDistance) {
            return false;
        }
        
        // Filter by PG type
        if (pgType !== 'all' && pg.type !== pgType) {
            return false;
        }
        
        // Filter by food type
        if (foodType !== 'all') {
            if (foodType === 'veg' && pg.foodType !== 'veg') {
                return false;
            } else if (foodType === 'non-veg' && pg.foodType !== 'non-veg') {
                return false;
            } else if (foodType === 'both' && pg.foodType !== 'both') {
                return false;
            }
        }
        
        // Filter by room type
        if (roomType !== 'all' && !pg.roomTypes.includes(roomType)) {
            return false;
        }
        
        // Filter by safety rating
        if (pg.safetyRating < minSafety) {
            return false;
        }
        
        // Filter by amenities
        if (selectedAmenities.length > 0) {
            for (const amenity of selectedAmenities) {
                if (!pg.amenities.includes(amenity)) {
                    return false;
                }
            }
        }
        
        return true;
    });
    
    const pgListingsContainer = document.getElementById('pg-listings');
    
    if (pgListingsContainer) {
        pgListingsContainer.innerHTML = '';
        
        if (filteredPGs.length === 0) {
            pgListingsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No PGs Found</h3>
                    <p>No PG accommodations match your criteria. Try adjusting your filters.</p>
                </div>
            `;
        } else {
            filteredPGs.forEach(pg => {
                const pgCard = createPGCard(pg);
                pgListingsContainer.appendChild(pgCard);
            });
        }
        
        updateResultsCount(filteredPGs.length);
    }
}

// Reset Filters
function resetFilters() {
    document.getElementById('location').value = 'all';
    document.getElementById('price-range').value = 10000;
    document.getElementById('price-value').textContent = '₹10,000';
    document.getElementById('distance').value = 2;
    document.getElementById('distance-value').textContent = '2 km';
    document.getElementById('pg-type').value = 'all';
    document.getElementById('food-type').value = 'all';
    document.getElementById('room-type').value = 'all';
    document.getElementById('safety').value = 0;
    
    const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]');
    amenitiesCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    initializePGListings();
}

// Update Results Count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    
    if (resultsCount) {
        if (count === 0) {
            resultsCount.textContent = 'No results found';
        } else if (count === 1) {
            resultsCount.textContent = 'Showing 1 result';
        } else {
            resultsCount.textContent = `Showing ${count} results`;
        }
    }
}

// Open PG Details
function openPGDetails(pgId) {
    const pg = pgData.find(pg => pg.id === pgId);
    
    if (!pg) return;
    
    const modal = document.getElementById('pg-modal');
    const modalContent = document.getElementById('modal-content');
    
    let pgTypeLabel = '';
    
    if (pg.type === 'boys') {
        pgTypeLabel = 'Boys';
    } else if (pg.type === 'girls') {
        pgTypeLabel = 'Girls';
    } else {
        pgTypeLabel = 'Co-ed';
    }
    
    let roomTypesText = '';
    
    if (pg.roomTypes.includes('single')) {
        roomTypesText += 'Single';
    }
    
    if (pg.roomTypes.includes('double')) {
        roomTypesText += roomTypesText ? ', Double Sharing' : 'Double Sharing';
    }
    
    if (pg.roomTypes.includes('triple')) {
        roomTypesText += roomTypesText ? ', Triple Sharing' : 'Triple Sharing';
    }
    
    let foodTypeText = '';
    
    if (pg.foodType === 'veg') {
        foodTypeText = 'Vegetarian';
    } else if (pg.foodType === 'non-veg') {
        foodTypeText = 'Non-Vegetarian';
    } else {
        foodTypeText = 'Both Veg & Non-Veg';
    }
    
    modalContent.innerHTML = `
        <div class="pg-detail-header">
            <div class="pg-detail-title">
                <h2>${pg.name}</h2>
                <div class="pg-detail-location">
                    <i class="icon-location"></i>
                    <span>${pg.address}</span>
                </div>
            </div>
            <div class="pg-detail-rating">
                <i class="icon-star"></i>
                <span>${pg.rating}</span>
            </div>
        </div>
        
        <div class="pg-detail-gallery">
            <div class="gallery-main">
                <img src="${pg.images[0]}" alt="${pg.name}" class="gallery-img">
            </div>
            <div>
                <img src="${pg.images[1]}" alt="${pg.name}" class="gallery-img">
            </div>
            <div>
                <img src="${pg.images[2]}" alt="${pg.name}" class="gallery-img">
            </div>
        </div>
        
        <div class="pg-detail-features">
            ${pg.features.map(feature => `<span class="pg-detail-feature"><i class="icon-${getFeatureIcon(feature)}"></i> ${feature}</span>`).join('')}
            <span class="pg-detail-feature"><i class="icon-location"></i> ${pg.distance} km from PICT</span>
            <span class="pg-detail-feature">${pgTypeLabel} PG</span>
        </div>
        
        <div class="pg-detail-info">
            <div class="pg-detail-main">
                <div class="pg-detail-description">
                    <h3>Description</h3>
                    <p>${pg.description}</p>
                </div>
                
                <div class="pg-detail-amenities">
                    <h3>Amenities</h3>
                    <div class="amenities-list">
                        ${pg.amenities.map(amenity => `
                            <div class="amenity-item">
                                <i class="icon-${amenity}"></i>
                                <span>${formatAmenityName(amenity)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="pg-detail-rules">
                    <h3>Rules & Policies</h3>
                    <ul class="rules-list">
                        ${pg.rules.map(rule => `
                            <li><i class="icon-check"></i> ${rule}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="pg-detail-food">
                    <h3>Food Menu</h3>
                    <div class="food-menu">
                        <div class="food-item">
                            <h4>Breakfast</h4>
                            <p>${pg.foodMenu.breakfast}</p>
                        </div>
                        <div class="food-item">
                            <h4>Lunch</h4>
                            <p>${pg.foodMenu.lunch}</p>
                        </div>
                        <div class="food-item">
                            <h4>Dinner</h4>
                            <p>${pg.foodMenu.dinner}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="pg-detail-sidebar">
                <div class="sidebar-section">
                    <h3>Price</h3>
                    <div class="price-tag">₹${pg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/month</div>
                </div>
                
                <div class="sidebar-section">
                    <h3>Details</h3>
                    <ul>
                        <li>PG Type: ${pgTypeLabel}</li>
                        <li>Room Types: ${roomTypesText}</li>
                        <li>Food Type: ${foodTypeText}</li>
                        <li>Safety Rating: ${pg.safetyRating}/5</li>
                    </ul>
                </div>
                
                <div class="sidebar-section">
                    <h3>Contact</h3>
                    <p>${pg.contactPerson}</p>
                    <p>${pg.contactNumber}</p>
                    <p>${pg.contactEmail}</p>
                </div>
                
                <button class="btn btn-primary contact-owner-btn">Contact Owner</button>
                <button class="btn btn-secondary schedule-visit-btn">Schedule Visit</button>
            </div>
        </div>
    `;
    
    // Add event listeners to buttons
    const contactOwnerBtn = modalContent.querySelector('.contact-owner-btn');
    const scheduleVisitBtn = modalContent.querySelector('.schedule-visit-btn');
    
    contactOwnerBtn.addEventListener('click', function() {
        alert(`Contact ${pg.contactPerson} at ${pg.contactNumber} or ${pg.contactEmail}`);
    });
    
    scheduleVisitBtn.addEventListener('click', function() {
        alert(`Schedule a visit to ${pg.name}. Please contact ${pg.contactPerson} to arrange a convenient time.`);
    });
    
    modal.style.display = 'block';
}

// Format Amenity Name
function formatAmenityName(amenity) {
    if (amenity === 'wifi') return 'WiFi';
    if (amenity === 'ac') return 'Air Conditioning';
    if (amenity === 'hot-water') return 'Hot Water';
    if (amenity === 'laundry') return 'Laundry Service';
    if (amenity === 'study-table') return 'Study Table';
    return amenity.charAt(0).toUpperCase() + amenity.slice(1).replace('-', ' ');
}
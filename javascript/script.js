/* LengthHairCare interactions for the hair guide, product catalogue and forms. */

// This makes sure the JavaScript only runs after the webpage has finished loading.
document.addEventListener('DOMContentLoaded', () => {

    // POROSITY ACCORDION
    document.querySelectorAll('[data-accordion-button]').forEach((button) => {
        button.addEventListener('click', () => {
            const panel = document.getElementById(button.getAttribute('aria-controls'));
            const expanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', String(!expanded));

            if (panel) panel.hidden = expanded;
        });
    });


    // PRODUCT CATALOGUE
    const productGrid = document.querySelector('[data-product-grid]');

    if (productGrid) {

        const products = [
            {
                name: 'Hair Growth Oil',
                category: 'oil',
                price: 'R350',
                image: '../assets/high-porosity-hair-oil.jpg',
                alt: 'Bottle of LengthHairCare hair growth oil',
                description: 'A nourishing oil blend for scalp care and sealing in moisture.'
            },
            {
                name: 'Herbal Hair Tea Spray',
                category: 'spray',
                price: 'Price on enquiry',
                image: '../assets/high-porosity-herbal-tea.jpg',
                alt: 'Herbal hair tea spray for a refreshing moisture boost',
                description: 'A refreshing herbal spray to add a light layer of moisture to your routine.'
            },
            {
                name: 'Natural Hair Growth Guide',
                category: 'guide',
                price: 'Price on enquiry',
                image: '../assets/hair-care-comb-guide.jpg',
                alt: 'Comb and natural hair care guide',
                description: 'A practical digital guide to building a consistent natural hair routine.'
            },
            {
                name: 'Porosity Care Combo',
                category: 'combo',
                price: 'Price on enquiry',
                image: '../assets/high-porosity-care-combo.jpg',
                alt: 'Hair care products arranged as a porosity care combo',
                description: 'A convenient pairing for people who want to explore a simple care routine.'
            },
            {
                name: 'Low Porosity Hair Oil',
                category: 'oil',
                price: 'Price on enquiry',
                image: '../assets/low-porosity-hair-oil.jpg',
                alt: 'Hair oil recommendation for low porosity hair',
                description: 'A lighter oil option to discuss if you are concerned about product build-up.'
            },
            {
                name: 'Medium Porosity Hair Tea',
                category: 'spray',
                price: 'Price on enquiry',
                image: '../assets/medium-porosity-herbal-tea.jpg',
                alt: 'Herbal tea hair product for medium porosity hair',
                description: 'A balanced herbal spray option for a regular moisture routine.'
            },
            {
                name: 'High Porosity Hair Tea',
                category: 'spray',
                price: 'Price on enquiry',
                image: '../assets/high-porosity-herbal-tea.jpg',
                alt: 'Herbal tea product for high porosity hair',
                description: 'A refreshing spray to complement a routine focused on retaining moisture.'
            }
        ];

        const search = document.querySelector('#product-search');
        const filter = document.querySelector('#product-filter');
        const count = document.querySelector('#product-count');
        const empty = document.querySelector('#no-products');

        const render = () => {

            const query = (search?.value || '').trim().toLowerCase();
            const category = filter?.value || 'all';

            const matches = products.filter((item) => {
                const text = `${item.name} ${item.description} ${item.category}`.toLowerCase();

                return text.includes(query) &&
                    (category === 'all' || item.category === category);
            });

            productGrid.innerHTML = matches.map((item) => `
                <article class="product-card">

                    <button
                        class="gallery-trigger"
                        type="button"
                        aria-label="View larger image of ${item.name}"
                        data-full-image="${item.image}"
                        data-image-alt="${item.alt}"
                    >
                        <span class="product-image">
                            <img src="${item.image}" alt="${item.alt}" loading="lazy">
                        </span>

                        <span class="gallery-hint">View image</span>
                    </button>

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <p class="price">${item.price}</p>

                    <a class="button" href="enquiry.html?product=${encodeURIComponent(item.name)}">
                        Enquire about this
                    </a>

                </article>
            `).join('');

            if (count) {
                count.textContent = `${matches.length} ${matches.length === 1 ? 'product' : 'products'} shown`;
            }

            if (empty) {
                empty.hidden = matches.length > 0;
            }
        };

        search?.addEventListener('input', render);
        filter?.addEventListener('change', render);

        render();
    }


    // IMAGE LIGHTBOX
    const lightbox = document.querySelector('#image-lightbox');

    if (lightbox) {

        const image = lightbox.querySelector('img');
        const closeButton = lightbox.querySelector('[data-lightbox-close]');

        let previousFocus;

        const close = () => {

            lightbox.hidden = true;

            document.body.classList.remove('lightbox-open');

            previousFocus?.focus();
        };

        document.addEventListener('click', (event) => {

            if (!(event.target instanceof Element)) return;

            const trigger = event.target.closest('.gallery-trigger');

            if (!trigger) return;

            previousFocus = trigger;

            image.src = trigger.dataset.fullImage;
            image.alt = trigger.dataset.imageAlt || '';

            lightbox.hidden = false;

            document.body.classList.add('lightbox-open');

            closeButton?.focus();
        });

        closeButton?.addEventListener('click', close);

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) close();
        });

        document.addEventListener('keydown', (event) => {

            if (lightbox.hidden) return;

            if (event.key === 'Escape') {
                close();
            }

            if (event.key === 'Tab') {
                event.preventDefault();
                closeButton?.focus();
            }
        });
    }


    // SELECT PRODUCT FROM URL
    const requestedProduct = new URLSearchParams(window.location.search).get('product');

    const interestSelect = document.querySelector('#interest');

    if (requestedProduct && interestSelect) {

        const option = Array.from(interestSelect.options).find((item) =>
            item.value === requestedProduct ||
            item.textContent === requestedProduct
        );

        if (option) option.selected = true;
    }


    // EMAIL VALIDATION
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    // ENQUIRY FORM VALIDATION
    const enquiryForm = document.querySelector('#enquiry-form');

    if (enquiryForm) {

        const enquiryRules = {

            name: (v) =>
                v.trim().length < 2
                    ? 'Please enter your full name (at least 2 letters).'
                    : '',

            email: (v) =>
                !v.trim()
                    ? 'Please enter your email address.'
                    : !emailPattern.test(v.trim())
                        ? 'Please enter a valid email address, for example name@example.com.'
                        : '',

            interest: (v) =>
                !v ? 'Please choose a product or service.' : '',

            porosity: (v) =>
                !v ? 'Please choose a porosity option.' : '',

            message: (v) =>
                v.trim().length < 10
                    ? 'Please write at least 10 characters.'
                    : ''
        };


        const checkEnquiryField = (name) => {

            const field = enquiryForm.elements[name];

            const error = document.querySelector(`#enquiry-error-${name}`);

            const problem = enquiryRules[name](field.value);

            error.textContent = problem;
            error.hidden = !problem;

            field.setAttribute('aria-invalid', problem ? 'true' : 'false');

            return !problem;
        };


        Object.keys(enquiryRules).forEach((name) => {

            const field = enquiryForm.elements[name];

            field.addEventListener('input', () => {
                if (field.getAttribute('aria-invalid') === 'true') {
                    checkEnquiryField(name);
                }
            });

            field.addEventListener('change', () => checkEnquiryField(name));

            field.addEventListener('blur', () => checkEnquiryField(name));
        });


        enquiryForm.addEventListener('submit', (event) => {

            event.preventDefault();

            const results = Object.keys(enquiryRules).map(checkEnquiryField);

            if (results.includes(false)) {

                const firstBad = Object.keys(enquiryRules).find((name) =>
                    enquiryForm.elements[name].getAttribute('aria-invalid') === 'true'
                );

                enquiryForm.elements[firstBad].focus();

                return;
            }

            const data = new FormData(enquiryForm);

            const result = document.querySelector('#enquiry-result');

            const selected = String(data.get('interest'));

            const porosity = data.get('porosity');

            const friendly = {
                low: 'low',
                medium: 'medium',
                high: 'high'
            }[porosity];

            const response = selected === 'Hair Growth Oil'
                ? 'The Hair Growth Oil is listed at R350. We can confirm current availability when we reply.'
                : `Thanks for asking about ${escapeHTML(selected)}. Price and availability are confirmed on enquiry.`;

            result.innerHTML = `
                <strong>Thanks, ${escapeHTML(String(data.get('name')).trim())}.</strong>
                ${response}

                ${friendly
                    ? `Based on your ${friendly} porosity selection, our team can also suggest how to introduce it into a routine.`
                    : 'If you are unsure of your porosity, our team can help you think through a gentle starting point.'
                }

                This summary has not been sent to the team. To send us a message, please use the contact form.
            `;

            result.hidden = false;

            result.focus();

            const button = enquiryForm.querySelector('button[type="submit"]');

            button.disabled = true;

            button.textContent = 'Enquiry received';
        });
    }


    // CONTACT FORM VALIDATION AND EMAIL SUBMISSION

 
    const WEB3FORMS_ACCESS_KEY = '5a1dfdf6-d2d0-4534-8afc-8ba36baa1adc';

    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {

        const rules = {

            name: (v) =>
                v.trim().length < 2
                    ? 'Please enter your full name (at least 2 letters).'
                    : '',

            email: (v) =>
                !v.trim()
                    ? 'Please enter your email address.'
                    : !emailPattern.test(v.trim())
                        ? 'Please enter a valid email address, for example name@example.com.'
                        : '',

            phone: (v) =>
                v.trim() && !/^\+?[0-9\s-]{9,15}$/.test(v.trim())
                    ? 'Please enter a valid phone number using digits only, for example 071 234 5678.'
                    : '',

            topic: (v) =>
                !v ? 'Please choose a message type.' : '',

            subject: (v) =>
                v.trim().length < 3
                    ? 'Please enter a subject (at least 3 characters).'
                    : '',

            message: (v) =>
                v.trim().length < 10
                    ? 'Your message is too short. Please write at least 10 characters.'
                    : ''
        };


        const checkField = (name) => {

            const field = contactForm.elements[name];

            const error = document.querySelector(`#error-${name}`);

            const problem = rules[name](field.value);

            error.textContent = problem;
            error.hidden = !problem;

            field.setAttribute('aria-invalid', problem ? 'true' : 'false');

            return !problem;
        };


        Object.keys(rules).forEach((name) => {

            const field = contactForm.elements[name];

            field.addEventListener('input', () => {
                if (field.getAttribute('aria-invalid') === 'true') {
                    checkField(name);
                }
            });

            field.addEventListener('change', () => checkField(name));

            field.addEventListener('blur', () => checkField(name));
        });


        contactForm.addEventListener('submit', async (event) => {

            event.preventDefault();

            const result = document.querySelector('#contact-result');

            const submitButton = contactForm.querySelector('button[type="submit"]');

            result.hidden = true;

            const results = Object.keys(rules).map(checkField);

            if (results.includes(false)) {

                const firstBad = Object.keys(rules).find((name) =>
                    contactForm.elements[name].getAttribute('aria-invalid') === 'true'
                );

                contactForm.elements[firstBad].focus();

                return;
            }


            const data = new FormData(contactForm);

            const name = String(data.get('name')).trim();

            const phone = String(data.get('phone')).trim() || 'Not provided';

            const subject = `[LengthHairCare] ${data.get('topic')}: ${String(data.get('subject')).trim()}`;


            submitButton.disabled = true;

            submitButton.textContent = 'Sending...';


            try {

                const response = await fetch('https://api.web3forms.com/submit', {

                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },

                    body: JSON.stringify({

                        access_key: WEB3FORMS_ACCESS_KEY,

                        name,

                        email: String(data.get('email')).trim(),

                        phone,

                        subject,

                        message: String(data.get('message')).trim()
                    })
                });


                const json = await response.json();

                if (!response.ok || !json.success) {
                    throw new Error('Send failed');
                }


                result.textContent = `Thank you, ${name}. Your message has been sent and we will get back to you soon.`;

                contactForm.reset();

            } catch (error) {

                result.textContent = 'Sorry, your message could not be sent. Please try again, or email us at info@lengthhaircare.co.za.';
            }


            result.hidden = false;

            result.focus();

            submitButton.disabled = false;

            submitButton.textContent = 'Send message';
        });
    }

});


// ESCAPE HTML FUNCTION
function escapeHTML(value) {

    return String(value ?? '').replace(/[&<>"']/g, (character) => ({

        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'

    })[character]);
}
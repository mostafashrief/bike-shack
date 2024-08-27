//logic for our custom contact form
    const businessCheckbox = document.getElementById('businessAccount');
    const companyDetails = document.getElementById('companyInfo');
    const contactReasons = document.getElementById('contactReason');
    const productName = document.getElementById('productNameField');
    const orderNumber = document.getElementById('orderNumberField');

    businessCheckbox.addEventListener('change', (event) => {
       if (businessCheckbox.checked) {
        companyDetails.classList.remove('hidden');
       }
       else{
        companyDetails.classList.add('hidden');
       }
    });

    contactReasons.addEventListener('change', (event) => {
        if (contactReasons.value === 'product') {
            productName.classList.remove('hidden');
        }
        else if (contactReasons.value === 'order') {
            orderNumber.classList.remove('hidden');
        }
    });
    


   


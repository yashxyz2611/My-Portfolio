const boxes = document.querySelectorAll('.box')

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.remove('animate');
            void entry.target.offsetWidth;
            entry.target.classList.add('animate')
            // observer.unobserve(entry.target)
        }
    })
},{threshold: 0.5});

boxes.forEach(box => observer.observe(box));
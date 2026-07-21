 // theme
    const site = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
    themeToggle.addEventListener('click',()=>{
      const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if(now==='dark') document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', now);
    });

    // open reader
    // document.querySelectorAll('[data-action="open"]').forEach(el=>{
    //   el.addEventListener('click', e=>{
    //     e.preventDefault();
    //     const post = el.closest('.post');
    //     const title = post.dataset.title || post.querySelector('h2').innerText;
    //     const body = post.dataset.body || '<p>No content</p>';
    //     document.getElementById('reader-title').innerText = title;
    //     document.getElementById('readerBody').innerHTML = body;
    //     document.getElementById('overlay').classList.add('open');
    //     document.getElementById('overlay').setAttribute('aria-hidden','false');
    //   })
    // })
    // document.getElementById('closeReader').addEventListener('click',()=>{
    //   document.getElementById('overlay').classList.remove('open');
    //   document.getElementById('overlay').setAttribute('aria-hidden','true');
    // })

    // basic search filter
    const q = document.getElementById('q');
    q.addEventListener('input', ()=>{
      const v = q.value.toLowerCase();
      document.querySelectorAll('.post').forEach(p=>{
        const t = (p.dataset.title||p.querySelector('h2').innerText).toLowerCase();
        const s = p.querySelector('.excerpt').innerText.toLowerCase();
        p.style.display = (t.includes(v) || s.includes(v)) ? '' : 'none';
      })
    });
	
	/* Show more and less*/
	document.querySelectorAll(".post").forEach(post => {

		const shorts = post.querySelectorAll(".short");

		// Only add button if content is long
		if (shorts.length === 0) return;

		const button = document.createElement("span");
		button.className = "toggle-btn read-more";
		button.textContent = "See More";


		//post.appendChild(button);
		const hasIframe = post.querySelector('iframe') !== null;
		
		// Find the .meta div inside the current post
		const metaDiv = post.querySelector('.meta');
	  
		if (metaDiv && !hasIframe) {
			
			metaDiv.append(button);
		}

		let expanded = false;

		button.addEventListener("click", () => {
			expanded = !expanded;

			shorts.forEach(p => {
				p.classList.toggle("expanded", expanded);
			});

			button.textContent = expanded ? "See Less" : "See More";
		});
});

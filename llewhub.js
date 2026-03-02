
function checkWidth() {
    const sectionW = document.getElementById('removeLeftSide');
    if (window.innerWidth < 1100) {
      sectionW.innerHTML = `
        <div class="col-12 scroll-bg">
          <div class= "scroll-div">
            <div class = "scroll-object">
            <!-- <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2 scroll-object" tabindex="0"> -->
              <div id="item-1" class="work-section">
                <h4 class="work-type-title">Critical/Journalistic</h4>
              </div>
              <div id="item-1-1" class="work-section">
                <h5 class="work-title">WeXL Hlaing’s Midwives Article, 2022</h5>
                <p class="italicize-exp">An article written following an interview with Snow Hnin El Hlaing 
                  and Mila Aung-Thwin. Midwives was Hlaing's directorial debut and a deep dive into the lives 
                  of two midwives in the Rakhine state of Myanmar.</p>
                <a class="link-to" href="https://www.wexl.org/stories/sundance-documentary-midwives">Link to Article</a>
              </div>
              <div id="item-2" class="work-section">
                <h4 class="work-type-title">Creative/Expressive</h4>
              </div>
              <div id="item-2-1" class="work-section">
                <h5 class="work-title">We'll Get Hungry On Mondays, Spring 2025</h5>
                <p class="italicize-exp">A story inspired by my experiences with my grandparents, published in 
                  UCSD Ellie's Echo Literary Magazine (Spring 2025 Issue). 
                </p>
                <a class="link-to" href="https://heyzine.com/flip-book/69df72954c.html">Link to Lit Magazine</a>
              </div>
              <div id="item-2-2" class="work-section">
                <h5 class="work-title">Doorman, 2023</h5>
                <p class="italicize-exp">A poem about a Door Man, possibility, and the vastness of existence.</p>
                <a class="link-to" href="files/The Door Man - Google Docs.pdf">Link to Poem</a>
              </div>
              
              <div id="item-2-3" class="work-section">
                <h5 class="work-title">The Bug Problem, 2025</h5>
                <p class="italicize-exp">Decisions, decisions. A poem exploring a person and a bug.</p>
                <a class="link-to" href="files/The Bug Problem - Google Docs.pdf">Link to Poem</a>
              </div>
            </div>
          </div>
        </div>`;
    } else {
      sectionW.innerHTML = `
        <div class="row bordering" id="removeLeftSide">
          <div class="col-3 color-left">
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#item-1">Critical/Journalistic</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">Article: WeXL Hlaing’s Midwives</a>
              </nav>
              <a class="nav-link" href="#item-2">Creative/Expressive</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-2-1">Lit Mag: We'll Get Hungry On Mondays</a>
                <a class="nav-link ms-3 my-1" href="#item-2-2">Poem: The Doorman</a>
                <a class="nav-link ms-3 my-1" href="#item-2-3">Poem: The Bug Problem</a>
              </nav>
            </nav>
          </div>
          <div class="col-9 scroll-bg">
            <div class= "scroll-div">
              <div class = "scroll-object">
                <div id="item-1" class="work-section">
                  <h4 class="work-type-title">Critical/Journalistic</h4>
                </div>
                <div id="item-1-1" class="work-section">
                  <h5 class="work-title">WeXL Hlaing’s Midwives Article, 2022</h5>
                  <p class="italicize-exp">An article written following an interview with Snow Hnin El Hlaing 
                    and Mila Aung-Thwin. Midwives was Hlaing's directorial debut and a deep dive into the lives 
                    of two midwives in the Rakhine state of Myanmar.</p>
                  <a class="link-to" href="https://www.wexl.org/stories/sundance-documentary-midwives">Link to Article</a>
                </div>
                <div id="item-2" class="work-section">
                  <h4 class="work-type-title">Creative/Expressive</h4>
                </div>
                <div id="item-2-1" class="work-section">
                  <h5 class="work-title">We'll Get Hungry On Mondays, Spring 2025</h5>
                  <p class="italicize-exp">A story inspired by my experiences with my grandparents, published in 
                    UCSD Ellie's Echo Literary Magazine (Spring 2025 Issue). 
                  </p>
                  <a class="link-to" href="https://heyzine.com/flip-book/69df72954c.html">Link to Lit Magazine</a>
                </div>
                <div id="item-2-2" class="work-section">
                  <h5 class="work-title">Doorman, 2023</h5>
                  <p class="italicize-exp">A poem about a Door Man, possibility, and the vastness of existence.</p>
                  <a class="link-to" href="files/The Door Man - Google Docs.pdf">Link to Poem</a>
                </div>
                
                <div id="item-2-3" class="work-section">
                  <h5 class="work-title">The Bug Problem, 2025</h5>
                  <p class="italicize-exp">Decisions, decisions. A poem exploring a person and a bug.</p>
                  <a class="link-to" href="files/The Bug Problem - Google Docs.pdf">Link to Poem</a>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }

    const sectionR = document.getElementById('stack-photo');
    if (window.innerWidth < 1000) {
      sectionR.innerHTML = `
        <img class="d-block personal blurb" src="images/personalPic.jpg" alt="personal picture">
        <p>Nice to meet you! I'm Llewelyn. As a storyteller, I believe stories can be told in ANY medium from 
            movies and paintings to coffee and code! 
            <br><br> I am a student at the UCSD, majoring in Interdisciplinary Computing and the Arts (ICAM) and 
            minoring in Computer Science. I am passionate about technical and artistic storytelling and am 
            particularly interested in writing, design, and programming spheres. 
            <br><br> My greatest desure is to help people tell and live their own stories. 
        </p>`;
    } else {
      sectionR.innerHTML = `
        <img class="d-block personal blurb" src="images/personalPic.jpg" alt="personal picture">
        <div>
          <p>Nice to meet you! I'm Llewelyn. As a storyteller, I believe stories can be told in ANY medium from 
              movies and paintings to coffee and code! 
              <br><br> I am a student at the UCSD, majoring in Interdisciplinary Computing and the Arts (ICAM) and 
              minoring in Computer Science. I am passionate about technical and artistic storytelling and am 
              particularly interested in writing, design, and programming spheres. 
              <br><br> My greatest desure is to help people tell and live their own stories. 
          </p>
        </div>`;
    }

  }
  
  // Check on load
  window.addEventListener('load', checkWidth);
  // Check on resize
  window.addEventListener('resize', checkWidth);
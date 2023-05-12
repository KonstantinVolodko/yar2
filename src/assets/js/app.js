document.addEventListener("DOMContentLoaded", () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    document.documentElement.style.setProperty('--h', height + "px");
    document.documentElement.style.setProperty('--w', width + "px");
    //el.style.setProperty("--r", right + "px");
    //scrollLock.enablePageScroll(openedModal); отключить
    //scrollLock.disablePageScroll(mobMenu);
    let wrapEl = document.querySelector(".trust__wrapper");
    window.onresize = (e) => {
        height = window.innerHeight;
        width = window.innerWidth;
        document.documentElement.style.setProperty('--h', height + "px");
        document.documentElement.style.setProperty('--w', width + "px");
        /*if(trustItems && trustItems.length != 0) {
            if(width >= 768) {
                setTimeout(() => {
                    let mobBlocks = document.querySelectorAll(".trust__block");
                    if(mobBlocks) {
                        let trustComp = document.querySelectorAll(".trust__company");
                        trustComp.forEach(comp => {
                            trustWrap.append(comp);
                        });
                        mobBlocks.forEach(block => {
                            block.remove();
                        });
                    }
                    curPage = 1;
                    wrapWid = wrapEl.getBoundingClientRect().width;
                    itemLen = trustItems[0].getBoundingClientRect().width;
                    margin = window.getComputedStyle(trustItems[0]).marginRight.split("px")[0];
                    trustWidth = (+margin + +itemLen) * len - +margin;
                    maxTrustTransl = trustWidth - wrapWid;
                    deltaTransl = (+margin + +itemLen) * 5;
                    curentTr = 0;
                    trustWrap.style.transform = `translateX(-${curentTr}px)`;
                    let ceilLen = Math.ceil(len/5);
                    trustCount.innerHTML = `1 / ${ceilLen}`;    
                    let trustBtnR = document.querySelector(".trust__btn_right");
                    let trustBtnL = document.querySelector(".trust__btn_left");
                    trustBtnR.onclick = (e) => {
                        e.preventDefault();
                        if((curentTr + deltaTransl) > maxTrustTransl && curentTr != maxTrustTransl) {
                            curentTr = maxTrustTransl;
                            trustWrap.style.transform = `translateX(-${curentTr}px)`;
                            curPage++;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        } else if(curentTr == maxTrustTransl) {
                            curentTr = 0;
                            trustWrap.style.transform = `translateX(0)`;
                            curPage = 1;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        } else {
                            curentTr += deltaTransl;
                            trustWrap.style.transform = `translateX(-${curentTr}px)`;
                            curPage++;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        }
                    };
                    trustBtnL.onclick = (e) => {
                        e.preventDefault();
                        if(curentTr == 0) {
                            curentTr = maxTrustTransl;
                            trustWrap.style.transform = `translateX(${-curentTr}px)`;
                            curPage = ceilLen;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        } else if(curentTr == maxTrustTransl) {
                            let deltaMin = (len % 5) * (+margin + +itemLen);
                            curentTr = maxTrustTransl - deltaMin;
                            trustWrap.style.transform = `translateX(${-curentTr}px)`;
                            curPage--;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        } else {
                            curPage--;
                            curentTr -= deltaTransl;
                            if(curPage == 1) {
                                curentTr = 0;
                            }
                            trustWrap.style.transform = `translateX(${-curentTr}px)`;
                            trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                        }
                    };        
                }, 100);
            } else {
                let j = 0;
                trustWrap.innerHTML = "";
                for (let i = 0; i < trustItems.length; i++) {
                    if(i % 6 == 1) {
                        let el = document.querySelector(`.trust__block${j}`);
                        el.append(trustItems[i]);
                    } else if(i % 6 == 0) {
                        j++;
                        let el = document.createElement("div");
                        el.className = `trust__block`;
                        el.classList.add(`trust__block${j}`);
                        trustWrap.append(el);
                        el.append(trustItems[i]);
                    } else {
                        let el = document.querySelector(`.trust__block${j}`);
                        el.append(trustItems[i]);
                    }
                }
                let startP = 1;
                trustCount.innerHTML = `${startP} / ${j}`;
                trustWrap.setAttribute("data-show", 1);
                let btnR = document.querySelector('.trust__btn_right');
                let btnL = document.querySelector('.trust__btn_left');
                btnR.onclick = (e) => {
                    e.preventDefault();
                    if(startP < j) {
                        startP++;
                        trustCount.innerHTML = `${startP} / ${j}`;
                    } else {
                        startP = 1;
                        trustCount.innerHTML = `${startP} / ${j}`;
                    }
                    trustWrap.setAttribute("data-show", startP);
                };    
            }
        }   */
    };

    let burger = document.querySelector(".header__menu_burger");
    let menu = document.querySelector(".burger-menu");
    if (burger) {
        burger.onclick = (e) => {
            e.preventDefault();
            bodyTag.classList.toggle("main-lock");
            header.classList.add("hide-header");
            menu.classList.add("open-menu");
            scrollLock.disablePageScroll(menu);
        };
    }

    let closeMenu = document.querySelector(".burger-menu__close");
    if (closeMenu) {
        closeMenu.onclick = (e) => {
            e.preventDefault();
            bodyTag.classList.toggle("main-lock");
            menu.classList.remove("open-menu");
            scrollLock.enablePageScroll(menu);
            setTimeout(() => {
                header.classList.remove("hide-header");
            }, 1000);
        };
    }

    let intro = document.querySelector(".intro");
    if (intro) {
        intro.classList.add("ready");
    }

    let prevScroll = 0;
    let header = document.querySelector(".header");
    let bodyTag = document.querySelector("body");

    let teamList = document.querySelector(".team__list");
    let itemsTeam = document.querySelectorAll(".team__item");
    let teamListHorLength;
    let distFromTop;
    let scrollDistance;
    let maxTranslate;

    if (teamList) {
        if (width <= 768) {
            let items = document.querySelectorAll(".team__item");
            teamList.innerHTML = `
                                    <li class="team__new-row">
                                        <ul class="new-team__list1"></ul>
                                    </li>
                                    <li class="team__new-row">                                        
                                        <ul class="new-team__list2"></ul>
                                    </li>
                                `;
            let nList1 = document.querySelector(".new-team__list1");
            let nList2 = document.querySelector(".new-team__list2");

            for (let i = 0; i < items.length; i++) {
                if (i < (items.length / 2)) {
                    nList1.append(items[i]);
                } else {
                    nList2.append(items[i]);
                }
            }
            teamListHorLength = nList1.scrollWidth;
            let team = document.querySelector(".team");
            let startH = team.offsetHeight;
            distFromTop = team.offsetTop;
            scrollDistance = distFromTop + teamListHorLength - team.getBoundingClientRect().width;
            let wrap = document.querySelector(".team__wrap");
            team.style.height = teamListHorLength + wrap.getBoundingClientRect().height + "px";
            teamList.ontransitionend = (e) => {
                teamList.classList.remove("scrolled");
            };
        } else {
            teamListHorLength = teamList.scrollWidth;
            let team = document.querySelector(".team");
            let startH = team.offsetHeight;
            distFromTop = team.offsetTop;
            scrollDistance = distFromTop + teamListHorLength - team.getBoundingClientRect().width;
            team.style.height = teamListHorLength + "px";
            teamList.ontransitionend = (e) => {
                teamList.classList.remove("scrolled");
            };
            maxTranslate = (teamListHorLength / itemsTeam.length) * (itemsTeam.length - 4);
        }
    }

    let curTr = 0;

    let schemeWrap = document.querySelector(".scheme");
    let firstElemScheme = document.querySelector(".scheme__el1");
    let allSchElems = document.querySelectorAll(".scheme__el");
    let elemsArr;
    let end = false;
    if (allSchElems) {
        elemsArr = Array.prototype.slice.call(allSchElems);
    }

    window.onscroll = (e) => {
        let delta = pageYOffset - prevScroll;
        if (delta > 0 && pageYOffset > 80 && header) {
            header.classList.add("hide-header");
        } else if (header && !bodyTag.classList.contains("main-lock")) {
            header.classList.remove("hide-header");
        }
        prevScroll = pageYOffset;
        if (bodyTag.classList.contains("menu-opened")) {
            bodyTag.classList.remove("menu-opened");
        }

        if (schemeWrap) {
            let scrollTop = window.pageYOffset;
            let distFromTop = schemeWrap.offsetTop;
            if (width > 768) {
                if (distFromTop <= scrollTop && !schemeWrap.classList.contains("sch-scrolled")) {
                    schemeWrap.classList.add("sch-scrolled");
                }
            } else {
                let distFromTopEl = firstElemScheme.getBoundingClientRect().top;
                if (distFromTopEl <= (height / 2) && !firstElemScheme.classList.contains("sch-scrolled")) {
                    firstElemScheme.classList.add("sch-scrolled");
                    let ind = elemsArr.indexOf(firstElemScheme);
                    if (ind + 1 < allSchElems.length) {
                        firstElemScheme = allSchElems[ind + 1];
                    } else if (!end) {
                        let bottom = document.querySelector(".scheme__body_bottom");
                        bottom.classList.add("sch-scrolled");
                        let schBody = document.querySelector(".scheme__body");
                        schBody.classList.add("sch-scrolled");
                        end = true;
                    }
                }
            }
        }

        if (teamList) {
            let scrollTop = window.pageYOffset;
            if (scrollTop >= distFromTop && scrollTop <= scrollDistance + 138) {
                curTr = +scrollTop - +distFromTop;
                teamList.style.transform = `translateX(-${curTr}px)`;
                teamList.classList.add("scrolled")
            } else if (scrollTop >= distFromTop && curTr != maxTranslate) {
                curTr = maxTranslate;
                teamList.style.transform = `translateX(-${curTr}px)`;
            } else if (scrollTop <= distFromTop && curTr != 0) {
                curTr = 0;
                teamList.style.transform = `translateX(-${curTr}px)`;
            }
        }
    };



    let items = document.querySelectorAll(".item-submenu");
    if (items) {
        items.forEach(item => {
            item.onclick = (e) => {
                item.classList.toggle("opened");
            };
        });
    }

    let btnsMore = document.querySelectorAll(".btn-more");
    let servicesList = document.querySelector(".services");
    if (btnsMore) {
        btnsMore.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                let parent = btn.closest(".services__item");
                let prevOpened = servicesList.querySelector(".opened");
                if (prevOpened && prevOpened != parent) {
                    prevOpened.classList.remove("opened");
                } else if (prevOpened) {
                    prevOpened.classList.remove("opened");
                    return;
                }
                parent.classList.add("opened");
            };
        });
    }

    let servicesItems = document.querySelectorAll(".services__item");
    if (servicesItems) {
        servicesItems.forEach(item => {
            item.onclick = (e) => {
                e.preventDefault();
                if (e.target.classList.contains("btn-more")) {
                    return;
                }
                let prevOpened = servicesList.querySelector(".opened");
                if (prevOpened && prevOpened != item) {
                    prevOpened.classList.remove("opened");
                } else if (prevOpened) {
                    prevOpened.classList.remove("opened");
                    return;
                }
                item.classList.add("opened");
            };
        });
    }

    let btnYear = document.querySelector("#btn-year");
    let yearsWrapper = document.querySelector(".about__awards");
    if (btnYear) {
        btnYear.onclick = (e) => {
            e.preventDefault();
            let attr = +yearsWrapper.getAttribute("data-year");
            let num;
            if (attr > 2018) {
                num = attr - 1;
            } else {
                num = 2022;
            }
            yearsWrapper.setAttribute("data-year", num)
        };
    }

    let awardsItems = document.querySelectorAll(".awords__item");
    let popUpAward = document.querySelector(".pop-up__awards");
    if (awardsItems) {
        awardsItems.forEach(item => {
            item.onclick = (e) => {
                e.preventDefault();
                let attr = item.getAttribute("data-award");
                let award = document.querySelector(`.${attr}`);
                if (award) {
                    award.classList.add("show-award");
                    bodyTag.classList.add("main-lock");
                    scrollLock.disablePageScroll(popUpAward);
                    setTimeout(() => {
                        popUpAward.classList.add("show");
                    }, 100);
                }
            };
        });
    }

    let closePopUpAward = document.querySelector(".pop-up__awards_close");
    if (closePopUpAward) {
        closePopUpAward.onclick = (e) => {
            e.preventDefault();
            let shown = document.querySelector(".show-award");
            popUpAward.classList.remove("show");
            bodyTag.classList.remove("main-lock");
            scrollLock.enablePageScroll(popUpAward);
            setTimeout(() => {
                shown.classList.remove("show-award");
            }, 1000);
        };
    }

    let stackList = document.querySelector(".stack__list");
    let stackItems = document.querySelectorAll(".stack__list_item");

    if (stackItems) {
        stackItems.forEach(item => {
            item.onclick = () => {
                let attr = item.getAttribute("data-item");
                stackList.setAttribute("data-opened", attr)
            };
            item.onmouseenter = () => {
                let attr = item.getAttribute("data-item");
                stackList.setAttribute("data-opened", attr)
            };
        });
    }

    let teamItems = document.querySelectorAll(".team__item");
    let teamCount = document.querySelector(".team__page");
    if (teamItems && teamCount) {
        let len = teamItems.length;
        teamCount.innerHTML = `1 / ${Math.ceil(len / 4)}`;
    }

    let teamBtnRight = document.querySelector(".team__btn_right");
    if (teamBtnRight) {
        teamBtnRight.onclick = (e) => {
            e.preventDefault();

        }
    }

    let projectsLinks = document.querySelectorAll(".project");
    if (projectsLinks) {
        projectsLinks.forEach(link => {
            link.onclick = (e) => {
                //e.preventDefault();
            }
        });
    }



    let trustItems = document.querySelectorAll(".trust__company");
    let trustCount = document.querySelector(".trust__page");
    let trustWrap = document.querySelector(".trust__companies");
    let trustWidth;
    let maxTrustTransl;
    let deltaTransl;
    let curentTr = 0;
    let curPage = 1;
    let wrapWid;
    let itemLen;
    let margin;
    let len;

    /*if(trustItems && trustItems.length != 0) {
        if(width >= 768) {
            wrapEl = document.querySelector(".trust__wrapper");
            wrapWid = wrapEl.getBoundingClientRect().width;
            len = trustItems.length;
            let ceilLen = Math.ceil(len/5);
            trustCount.innerHTML = `1 / ${ceilLen}`;
            itemLen = trustItems[0].getBoundingClientRect().width;
            let margin = window.getComputedStyle(trustItems[0]).marginRight.split("px")[0];
            trustWidth = (+margin + +itemLen) * len - +margin;
            maxTrustTransl = trustWidth - wrapWid;
            deltaTransl = (+margin + +itemLen) * 5;
    
            let trustBtnR = document.querySelector(".trust__btn_right");
            let trustBtnL = document.querySelector(".trust__btn_left");
            trustBtnR.onclick = (e) => {
                e.preventDefault();
                if((curentTr + deltaTransl) > maxTrustTransl && curentTr != maxTrustTransl) {
                    curentTr = maxTrustTransl;
                    trustWrap.style.transform = `translateX(-${curentTr}px)`;
                    curPage++;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                } else if(curentTr == maxTrustTransl) {
                    curentTr = 0;
                    trustWrap.style.transform = `translateX(0)`;
                    curPage = 1;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                } else {
                    curentTr += deltaTransl;
                    trustWrap.style.transform = `translateX(-${curentTr}px)`;
                    curPage++;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                }
            };
            trustBtnL.onclick = (e) => {
                e.preventDefault();
                if(curentTr == 0) {
                    curentTr = maxTrustTransl;
                    trustWrap.style.transform = `translateX(${-curentTr}px)`;
                    curPage = ceilLen;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                } else if(curentTr == maxTrustTransl) {
                    let deltaMin = (len % 5) * (+margin + +itemLen);
                    curentTr = maxTrustTransl - deltaMin;
                    trustWrap.style.transform = `translateX(${-curentTr}px)`;
                    curPage--;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                } else {
                    curPage--;
                    curentTr -= deltaTransl;
                    if(curPage == 1) {
                        curentTr = 0;
                    }
                    trustWrap.style.transform = `translateX(${-curentTr}px)`;
                    trustCount.innerHTML = `${curPage} / ${ceilLen}`;
                }
            };
        } else {
            let j = 0;
            trustWrap.innerHTML = "";
            for (let i = 0; i < trustItems.length; i++) {
                if(i % 6 == 1) {
                    let el = document.querySelector(`.trust__block${j}`);
                    el.append(trustItems[i]);
                } else if(i % 6 == 0) {
                    j++;
                    let el = document.createElement("div");
                    el.className = `trust__block`;
                    el.classList.add(`trust__block${j}`);
                    trustWrap.append(el);
                    el.append(trustItems[i]);
                } else {
                    let el = document.querySelector(`.trust__block${j}`);
                    el.append(trustItems[i]);
                }
            }
            let startP = 1;
            trustCount.innerHTML = `${startP} / ${j}`;
            trustWrap.setAttribute("data-show", 1);
            let btnR = document.querySelector('.trust__btn_right');
            let btnL = document.querySelector('.trust__btn_left');
            btnR.onclick = (e) => {
                e.preventDefault();
                if(startP < j) {
                    startP++;
                    trustCount.innerHTML = `${startP} / ${j}`;
                } else {
                    startP = 1;
                    trustCount.innerHTML = `${startP} / ${j}`;
                }
                trustWrap.setAttribute("data-show", startP);
            };
        }
    }*/

    // let formBtn = document.querySelector(".footer__form_btn");
    // let popUpThanks = document.querySelector(".pop-up-thanks");
    // if (formBtn) {
    //     formBtn.onclick = (e) => {
    //         e.preventDefault();
    //         popUpThanks.style.display = "flex";
    //         scrollLock.disablePageScroll(popUpThanks);
    //         setTimeout(() => {
    //             popUpThanks.classList.add("show");
    //         }, 100);
    //     };
    // }

    let vacancyItems = document.querySelectorAll(".vacances__item");
    let vacancyPopUp = document.querySelector(".pop-up-vacancy");
    if (vacancyItems) {
        vacancyItems.forEach(item => {
            item.onclick = (e) => {
                e.preventDefault();
                let prevOpened = document.querySelector(".vacancy-block.show");
                if (prevOpened) {
                    prevOpened.classList.remove("show");
                }
                let attr = item.getAttribute("data-id");
                let vacancyBlock = document.querySelector(`[data-vacancy="${attr}"]`);
                vacancyBlock.classList.add("show");
                let vacancyWrap = vacancyPopUp.querySelector(".pop-up-vacancy__wrap");
                scrollLock.disablePageScroll(vacancyWrap);
                vacancyPopUp.style.display = "block";
                setTimeout(() => {
                    vacancyPopUp.classList.add("show");
                }, 100);
            };
        });
    }

    let popUpClose = document.querySelectorAll(".pop-up__close");
    if (popUpClose) {
        popUpClose.forEach(btn => {
            btn.onclick = (e) => {
                let popUp = btn.closest(".pop-up");
                popUp.classList.remove("show");
                scrollLock.enablePageScroll(popUp);
                setTimeout(() => {
                    popUp.style.display = "none";
                }, 1000);
            }
        });
    }

    const promElems = document.querySelectorAll(".stack-balls__item");

    const canv = document.querySelector("#stack-balls__canvas");

    if (canv) {
        const ctx = canv.getContext("2d");
        const FPS = 60;

        let MAX_VELOCITY;
        if (width > 768) {
            MAX_VELOCITY = 150;
        } else {
            MAX_VELOCITY = 80;
        }

        const BALLS_Q = promElems.length;
        let balls = [];
        canv.width = document.documentElement.clientWidth;
        canv.height = document.documentElement.clientHeight;

        const requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        const cancelAnimationFrame =
            window.cancelAnimationFrame || window.mozCancelAnimationFrame;
        let AnimationFrame;
        let timeout;

        window.addEventListener("resize", () => {
            if (document.documentElement.clientWidth !== width) {
                width = document.documentElement.clientWidth;

                if (AnimationFrame) cancelAnimationFrame(AnimationFrame);
                if (timeout) clearTimeout(timeout);

                canv.width = document.documentElement.clientWidth;
                canv.height = document.documentElement.clientHeight;

                timeout = setTimeout(() => {
                    balls = [];
                    createBalls();
                    AnimationFrame = requestAnimationFrame(loop);
                }, 200);
            }
        });

        class Ball {
            constructor({ count, descr, text, idx, img, color }) {
                this.count = count;
                this.descr = descr;
                this.text = text;
                this.img = img;
                this.color = color;

                if (canv.width > 1024) {
                    this.radius = 130;
                } else if (canv.width > 768) {
                    this.radius = 90;
                } else {
                    this.radius = 50;
                }

                this.maxBRow = Math.floor(canv.width / (this.radius * 2 + 10));
                this.bWidth = this.radius * 2;

                this.x =
                    idx > this.maxBRow * 3
                        ? this.bWidth * (idx - this.maxBRow * 3) + idx * 10 - this.radius
                        : idx > this.maxBRow * 2
                            ? this.bWidth * (idx - this.maxBRow * 2) + idx * 10 - this.radius
                            : idx > this.maxBRow
                                ? this.bWidth * (idx - this.maxBRow) + idx * 10 - this.radius
                                : this.bWidth * idx + idx * 10 - this.radius;

                this.y =
                    idx > this.maxBRow * 3
                        ? this.radius * 7 + idx * 10
                        : idx > this.maxBRow * 2
                            ? this.radius * 5 + idx * 10
                            : idx > this.maxBRow
                                ? this.radius * 3 + idx * 10
                                : this.radius + idx * 10;
                this.velocityX = ((Math.random() * 2 - 1) * MAX_VELOCITY) / FPS;
                this.velocityY = ((Math.random() * 2 - 1) * MAX_VELOCITY) / FPS;
                this.collided = false;
            }

            drawCircle() {
                ctx.fillStyle = this.color;
                ctx.save();

                ctx.beginPath();
                ctx.strokeStyle = "#f5f5f5";
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                ctx.restore();

                if (this.count) {
                    let countWidth = ctx.measureText(this.count).width;
                    let descrWidth = ctx.measureText(this.descr).width;

                    let countPosX =
                        countWidth > descrWidth
                            ? this.x - descrWidth
                            : this.x - descrWidth + 10;

                    let posY;
                    if (canv.width > 1024) {
                        posY = this.y + 15;
                    } else if (canv.width > 768) {
                        posY = this.y + 8;
                    } else {
                        posY = this.y + 5;
                    }

                    if (this.color == "#FF6500") {
                        ctx.fillStyle = "white";
                    } else {
                        ctx.fillStyle = "#FF6500";
                    }

                    if (canv.width > 1024) {
                        ctx.font = "bold 46px Gilroy";
                    } else if (canv.width > 768) {
                        ctx.font = "bold 30px Gilroy";
                    } else {
                        ctx.font = "bold 16px Gilroy";
                    }

                    if (canv.width > 768) {
                        ctx.fillText(this.count, countPosX, posY);
                    } else {
                        ctx.fillText(this.count.toUpperCase(), countPosX, posY);
                    }

                    ctx.save();

                    ctx.fillStyle = "#212121";

                    if (canv.width > 1024) {
                        ctx.font = "bold 24px Gilroy";
                    } else if (canv.width > 768) {
                        ctx.font = "bold 18px Gilroy";
                    } else {
                        ctx.font = "bold 14px Gilroy";
                    }

                    ctx.fillText(this.descr, this.x + countWidth, posY - 5);
                } else {
                    if (canv.width > 1024) {
                        ctx.drawImage(this.img, this.x - 48, this.y - 96, 96, 96);
                    } else if (canv.width > 768) {
                        ctx.drawImage(this.img, this.x - 40, this.y - 80, 80, 80);
                    } else {
                        ctx.drawImage(this.img, this.x - 32, this.y - 54, 64, 64);
                    }
                }

                ctx.restore();

                ctx.textAlign = "center";
                ctx.fillStyle = "#616161";

                let widthText;
                let lhText;

                if (canv.width > 1024) {
                    ctx.font = "18px Gilroy";
                    widthText = 175;
                    lhText = 27;
                } else if (canv.width > 768) {
                    ctx.font = "16px Gilroy";
                    widthText = 155;
                    lhText = 22;
                } else {
                    ctx.font = "12px Gilroy";
                    widthText = 125;
                    lhText = 18;
                }

                if (this.count) {
                    wrapText(ctx, this.text, this.x, this.y + 20, widthText, lhText);
                } else {
                    wrapText(ctx, this.text, this.x, this.y + 40, widthText, lhText);
                }

                function wrapText(context, text, x, y, maxWidth, lineHeight) {
                    var words = text;
                    var line = "";

                    for (var n = 0; n < words.length; n++) {
                        var testLine = line + words[n] + " ";
                        var metrics = context.measureText(testLine);
                        var testWidth = metrics.width;
                        if (testWidth > maxWidth && n > 0) {
                            context.fillText(line, x, y);
                            line = words[n] + " ";
                            y += lineHeight;
                        } else {
                            line = testLine;
                        }
                    }
                    context.fillText(line, x, y);
                }
            }
        }

        // creating balls

        function createBalls() {
            for (let i = 0; i < BALLS_Q; i++) {
                let promCount = document.querySelectorAll(".stack-balls__heading-text");
                let heading = document.querySelectorAll(".stack-balls__heading");
                heading.forEach(element => {
                    let el = document.createElement("span");
                    el.className = "promotions-item-span";
                    element.append(el);
                });

                let promDescr = document.querySelectorAll(
                    ".promotions-item-span"
                );
                if (!promDescr) {
                    promDescr = [];
                    promDescr.length = promCount.length;
                }
                let promText = document.querySelectorAll(".promotions-item__descr");
                let cleanText = document.querySelectorAll(".office-clean__descr");
                let cleanImg = document.querySelectorAll(".office-clean__img");

                balls[i] = new Ball({
                    count: promCount[i] && promCount[i].innerText,
                    descr: promCount[i] && promDescr[i].innerText.toUpperCase(),
                    text:
                        (promCount[i]) || cleanText[i].innerText,
                    idx: i + 1,
                    img: cleanImg[i],
                    color:
                        (function randomInteger(min = 0, max = 1) {
                            let rand = min + Math.random() * (max + 1 - min);
                            let colors = ["#fee7d8", "#FF6500"];
                            let num = Math.floor(rand);
                            return colors[num];
                        })(),
                });
                balls[i].drawCircle();
            }
        }

        createBalls();

        AnimationFrame = requestAnimationFrame(loop);

        function massCoefficient(m1, m2) {
            return (2 * m1) / (m1 + m2);
        }

        function velocityСoefficient(v1x, v1y, v2x, v2y, x1, y1, x2, y2) {
            return (
                ((v1x - v2x) * (x1 - x2) + (v1y - v2y) * (y1 - y2)) /
                (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
            );
        }

        // aligning balls in order to preserve them from stuck in each other
        function alignBalls(b1, b2, v, d, ed) {
            b2.x = b1.x - (v[0] * ed) / d;
            b2.y = b1.y - (v[1] * ed) / d;
        }

        function collision(b1, b2) {
            // trying to make it shorter...
            let mc1 = massCoefficient(b2.radius, b1.radius);
            let mc2 = massCoefficient(b1.radius, b2.radius);
            let vc1 = velocityСoefficient(
                b1.velocityX,
                b1.velocityY,
                b2.velocityX,
                b2.velocityY,
                b1.x,
                b1.y,
                b2.x,
                b2.y
            );
            let vc2 = velocityСoefficient(
                b2.velocityX,
                b2.velocityY,
                b1.velocityX,
                b1.velocityY,
                b2.x,
                b2.y,
                b1.x,
                b1.y
            );
            b1.velocityX = b1.velocityX - mc1 * vc1 * (b1.x - b2.x);
            b1.velocityY = b1.velocityY - mc1 * vc1 * (b1.y - b2.y);
            b2.velocityX = b2.velocityX - mc2 * vc2 * (b2.x - b1.x);
            b2.velocityY = b2.velocityY - mc2 * vc2 * (b2.y - b1.y);
            // moving the second ball because it'll be skipped as a collided
            move(b2);
        }

        // changing the position of the ball and displaying it
        function move(b) {
            b.y += b.velocityY;
            b.x += b.velocityX;
            // rebound from the walls
            if (b.y - b.radius <= 0) {
                b.y = b.radius;
                b.velocityY = -b.velocityY;
            } else if (b.y + b.radius >= canv.height) {
                b.y = canv.height - b.radius;
                b.velocityY = -b.velocityY;
            }
            if (b.x - b.radius <= 0) {
                b.x = b.radius;
                b.velocityX = -b.velocityX;
            } else if (b.x + b.radius >= canv.width) {
                b.x = canv.width - b.radius;
                b.velocityX = -b.velocityX;
            }
            b.drawCircle();
        }

        function loop() {
            // clearing the whole canvas
            ctx.clearRect(0, 0, canv.width, canv.height);
            balls.forEach((b) => {
                b.collided = false;
            });
            for (let i = 0; i < balls.length; i++) {
                if (balls[i].collided) continue;
                for (let j = 0; j < balls.length; j++) {
                    if (i == j || balls[j].collided) continue;
                    let vector = [balls[i].x - balls[j].x, balls[i].y - balls[j].y];
                    let distance = Math.sqrt(
                        Math.pow(vector[0], 2) + Math.pow(vector[1], 2)
                    );
                    let expected_distance = balls[i].radius + balls[j].radius;
                    // collision check
                    if (distance <= expected_distance) {
                        balls[i].collided = true;
                        balls[j].collided = true;
                        if (distance != expected_distance) {
                            alignBalls(
                                balls[i],
                                balls[j],
                                vector,
                                distance,
                                expected_distance
                            );
                        }
                        collision(balls[i], balls[j]);
                        break;
                    }
                }
                move(balls[i]);
            }
            AnimationFrame = requestAnimationFrame(loop);
        }
    }

    let questionItems = document.querySelectorAll(".questions__item");
    if (questionItems) {
        questionItems.forEach(item => {
            item.onclick = (e) => {
                let prevOpen = document.querySelector(".questions__item.opened");
                if (prevOpen && prevOpen == item) {
                    item.classList.remove("opened");
                } else if (prevOpen && prevOpen != item) {
                    prevOpen.classList.remove("opened");
                    item.classList.add("opened");
                } else {
                    item.classList.add("opened");
                }
            };
        });
    }

    let questionBtns = document.querySelectorAll(".questions__item_btn");
    if (questionBtns) {
        questionBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
            };
        });
    }

    let containerCubs = document.querySelector(".container-cubs");
    if (containerCubs) {
        const cubsSection = document.querySelector(".cubs");
        const cubsInner = document.querySelector(".cubs__inner");
        const cubs = document.querySelectorAll(".cubs-item");

        // animate cubs on hover

        let isElemMouseMove = false;
        cubsSection.addEventListener("mousemove", (e) => {
            throttleMouseMove(e);
        });
        function throttleMouseMove(e) {
            if (isElemMouseMove == false && cubsSection.classList.contains("scrolled")) {
                window.requestAnimationFrame(function () {
                    cubs.forEach((el, i) => {
                        const transform = cubesTransform[i];

                        let rx = transform.rotateX;
                        let ry = transform.rotateY;
                        let rz = transform.rotateZ;

                        let x = Math.round((e.clientX * transform.movingValue) / 350);
                        let y = Math.round((e.clientY * transform.movingValue) / 350);

                        el.style.transform = `rotateX(${rx + y}deg) rotateY(${ry + x
                            }deg) rotateZ(${rz + y}deg)`;
                    });
                    isElemMouseMove = false;
                });
                isElemMouseMove = true;
            }
        }

        // position animation when scrolling to the cub section

        window.addEventListener("scroll", throttleScroll, false);

        let isScrolling = false;

        function throttleScroll(e) {
            if (isScrolling == false) {
                window.requestAnimationFrame(function () {
                    scrolling();
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }

        function scrolling() {
            if (
                isFullyVisible(cubsInner) &&
                !cubsSection.classList.contains("scrolled")
            ) {
                cubsSection.classList.add("scrolled");
                setTransform(cubs);

                setTimeout(() => {
                    cubsSection.classList.add("done");
                }, 600);
            }
        }

        function isFullyVisible(el) {
            let elementBoundary = el.getBoundingClientRect();

            let top = elementBoundary.top;
            let bottom = elementBoundary.bottom;
            let height = elementBoundary.bottom;

            return top >= 0 && bottom + 200 <= window.innerHeight;
        }

        function getRandomDigit(max, min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let cubesTransform = [
            {
                rotateX: -21,
                rotateY: 16,
                rotateZ: 6,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: -75,
                rotateY: 40,
                rotateZ: 5,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: -5,
                rotateY: 25,
                rotateZ: 40,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: -52,
                rotateY: 21,
                rotateZ: 26,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: -55,
                rotateY: -15,
                rotateZ: 35,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: 35,
                rotateY: 7,
                rotateZ: 28,
                movingValue: getRandomDigit(16, 4),
            },
            {
                rotateX: 5,
                rotateY: 70,
                rotateZ: 30,
                movingValue: getRandomDigit(16, 4),
            },
        ];

        function setTransform(elems) {
            elems.forEach((el, i) => {
                el.style.transform = `rotateX(${cubesTransform[i].rotateX}deg) rotateY(${cubesTransform[i].rotateY}deg) rotateZ(${cubesTransform[i].rotateZ}deg)`;
            });
        }

        // animate when page reload on visible cubs inner

        if (isFullyVisible(cubsInner)) {
            cubsSection.classList.add("scrolled");
            setTransform(cubs);

            setTimeout(() => {
                cubsSection.classList.add("done");
            }, 600);
        }

    }

    let sliders = document.querySelectorAll(".trust__wrapper");
    if (sliders && sliders.length > 0) {
        sliders.forEach(slider => {
            let btnPrev = slider.querySelector(".trust__btn_left");
            let btnNext = slider.querySelector(".trust__btn_right");

            /*let sectionSlider = slider.closest(".section-slider");
            let pag = sectionSlider.querySelector(".swiper-fr");
            let active = pag.querySelector(".active");
            let common = pag.querySelector(".common");
            let allTabs = slider.querySelectorAll(".swiper-slide").length;
            let commonSlides;
            if(allTabs < 10) {
                commonSlides = "0" + allTabs;
            } else {
                commonSlides = allTabs;
            }
            common.innerHTML = commonSlides;*/

            let swiper = new Swiper(slider, {
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev
                },
                loop: false,
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 30,
                freeMode: false,
                preloadImages: false,
                centeredSlides: false,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                initialSlide: 0,
                breakpoints: {
                    100: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 15,
                        grid: {
                            rows: 2,
                        },
                    },
                    769: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 30,
                        grid: {
                            rows: 1,
                        },
                    }

                },
            });

            let len = slider.querySelectorAll(".swiper-slide").length;
            let currentLen;
            if (window.innerWidth > 768) {
                currentLen = Math.ceil(len / 5);
            } else {
                currentLen = Math.ceil(len / 6);
            }
            let txt = slider.querySelector(".trust__page");
            txt.innerHTML = 1 + "/" + currentLen;
            swiper.on("slideChange", function () {
                if (window.innerWidth > 768) {
                    let curSlide = Math.ceil((swiper.realIndex + 5) / 5);
                    txt.innerHTML = curSlide + "/" + currentLen;
                } else {
                    let curSlide = Math.ceil((swiper.realIndex + 3) / 3);
                    txt.innerHTML = curSlide + "/" + currentLen;
                }
            })
        });
    }

    let portfolioProjects = document.querySelectorAll(".portfolio .project.hide");
    let portfolioBtn = document.querySelector(".show-projects");
    if (portfolioProjects.length > 0 && portfolioBtn) {
        portfolioBtn.onclick = (e) => {
            portfolioProjects.forEach(el => {
                e.preventDefault();
                el.classList.remove("hide");
                portfolioBtn.style.display = "none";
            });
        }
    }

    let graph = document.querySelector(".projects-graph .swiper-container");
    if (graph) {
        let swiper = new Swiper(graph, {
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: 'true',
            },
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 30,
            // mousewheel: {
            //     sensitivity: 1,
            // },
            grabCursor: true,
            freeMode: false,
            preloadImages: false,
            centeredSlides: false,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            initialSlide: 0,
        });
    }


    let designCardSwiper = new Swiper(".designCardSwiper", {
        // observer: true,
        // observeParents: true,
        // on: {
        //     init: function () {
        //         updateSwiperCount();
        //     },
        //     slideChange: function () {
        //         updateSwiperCount();
        //     }
        // },
        slidesPerView: 1,
        // spaceBetween: 1,
        navigation: {
            nextEl: ".designCard__btn_right",
            prevEl: ".designCard__btn_left",
        },
        on: {
            slideChange: function () {
                let total = this.slides.length;
                let current = this.activeIndex + 1;
                document.querySelector('.designCard__totalCoutn').innerHTML = total;
                document.querySelector('.designCard__actualCount').innerHTML = current;
            }
        },
        breakpoints: {
            1330: {
                spaceBetween: 80,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },

        }
    });



    // function updateSwiperCount() {
    //     let totalSlides = designCardSwiper.slides.length;
    //     let activeSlide = designCardSwiper.activeIndex + 1;
    //     let countElement = document.querySelector('.swiper-count');
    //     countElement.innerHTML = 'Slide ' + activeSlide + ' of ' + totalSlides;
    // }

    let sertificatsSwiper = new Swiper(".sertificatsSwiper", {
        slidesPerView: 1,
        // spaceBetween: 40,

        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            500: {
                spaceBetween: 30,
                slidesPerView: 2,
            },

        }
    });

    // let teamSwiper  = new Swiper(".team__list_wrap", {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     grabCursor: true,
    //     on: {
    //         slideChange: function() {
    //           let teamTotal = this.slides.length;
    //           let teamCurrent = this.activeIndex + 1;
    //           document.querySelector('.team__totalCoutn').innerHTML = teamTotal;
    //           document.querySelector('.team__actualCount').innerHTML = teamCurrent;
    //         }
    //     },
    //     navigation: {
    //         nextEl: ".team__btn_right",
    //         prevEl: ".team__btn_left",
    //     },

    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 4,
    //         },
    //         700: {
    //             slidesPerView: 3,
    //         },

    //     }
    // });

    let seoStepsText = document.querySelectorAll('.seo-steps__circulText p').forEach(e => {
        e.innerHTML = e.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 10}deg">${char}</span>`).join("")
    })

    let turnKeys = document.querySelector('.turn-key-services')
    let stages = document.querySelector('.stages')

    if (window.matchMedia("(min-width: 1024px)").matches && turnKeys) {

        let keysContentHeight = document.querySelector('.turn-key-services__col2').offsetHeight
        let keysItemHeight = document.querySelector('.turn-key-services__item').offsetHeight

        const tl1 = gsap.timeline();
        tl1.fromTo('.turn-key-services__text-block', { y: 0 }, { y: keysContentHeight - keysItemHeight * 2.5 })


        ScrollTrigger.create({
            animation: tl1,
            trigger: '.turn-key-services__list',
            start: "top 50%",
            scrub: true,
        })
    }




    if (window.matchMedia("(min-width: 1024px)").matches && stages) {
        let conteinerHeight = document.querySelector(".stages__list").offsetHeight
        let contentItem = document.querySelector('.stages__item').offsetHeight

        const tl2 = gsap.timeline();
        tl2.fromTo('.stages h3', { y: 0 }, { y: conteinerHeight - contentItem })


        ScrollTrigger.create({
            animation: tl2,
            trigger: '.stages__list',
            start: "top 50%",
            scrub: true,
        })
    }

    let modalOrder = document.getElementById('myModal');
    let openModalBtn = document.querySelectorAll(".intro__main_btn");


    openModalBtn.forEach(e => {
        e.onclick = function () {
            modalOrder.style.display = "block";
        }
    })

    let closeModalBtn = document.getElementsByClassName("close")[0];

    closeModalBtn.onclick = function () {
        modalOrder.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modalOrder) {
            modalOrder.style.display = "none";
        }
    }



    Fancybox.bind("[data-fancybox]", {
    });
});





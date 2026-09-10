const patterns = document.querySelector(".patterns")

const size = 110
const gap = 20
const step = size + gap

const cols = Math.ceil(patterns.clientWidth / step)
const rows = Math.ceil(patterns.clientHeight / step)

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const img = document.createElement("img")

        img.src = "./images/hero/hero-pattern.png"

        img.style.left = col * step + "px"
        img.style.top = row * step + "px"

        patterns.appendChild(img)
    }
}


const faqData = [
    {
        q: "How Do I Place An Order Or Request A Delivery?",
        a: "Simply message us on WhatsApp with your pickup and drop-off details, and our team will confirm your delivery in minutes.",
    },
    {
        q: "What Types Of Deliveries Do You Handle?",
        a: "We handle food, parcels, documents, groceries, and customized errands across the city.",
    },
    {
        q: "What Are Your Delivery Rates?",
        a: "Rates depend on distance and package size. You'll always get a clear, upfront price before we start.",
    },
    {
        q: "How Do I Pay For A Delivery?",
        a: "You can pay via mobile transfer, card, or cash on delivery — whatever is most convenient for you.",
    },
    {
        q: "Can I Track My Delivery?",
        a: "Yes! We send you real-time updates on WhatsApp so you always know where your order is.",
    },
    {
        q: "What Are Your Operating Hours?",
        a: "We operate every day from 8:00 AM to 10:00 PM to keep your deliveries moving.",
    },
    {
        q: "What Areas Do You Cover?",
        a: "We currently cover all major districts in the city and are expanding to new areas soon.",
    },
    {
        q: "Can I Make A Special Delivery Request?",
        a: "Absolutely. Just share the details of your request and we'll tailor the delivery to your needs.",
    },
]

const faqList = document.querySelector("#faqList")
const faqItems = []

faqData.forEach((item) => {

    const card = document.createElement("div")
    card.className = "rounded-xl bg-white px-6 shadow-sm"


    const head = document.createElement("button")
    head.type = "button"
    head.className =
        "flex w-full items-center justify-between gap-4 py-5 text-left"

    const question = document.createElement("span")
    question.className = "text-[16px] font-bold text-[#111]"
    question.textContent = item.q

    const icon = document.createElement("span")
    icon.className =
        "shrink-0 text-3xl font-light leading-none text-[#FEAE00]"
    icon.textContent = "+"

    head.append(question, icon)


    const panel = document.createElement("div")
    panel.className =
        "overflow-hidden transition-[max-height] duration-300 ease-in-out"
    panel.style.maxHeight = "0px"

    const answer = document.createElement("p")
    answer.className = "pb-5 text-[14px] leading-relaxed text-gray-600"
    answer.textContent = item.a

    panel.appendChild(answer)
    card.append(head, panel)
    faqList.appendChild(card)

    const entry = { panel, icon }
    faqItems.push(entry)

    head.addEventListener("click", () => {
        const isOpen = panel.style.maxHeight !== "0px"

        faqItems.forEach((it) => {
            it.panel.style.maxHeight = "0px"
            it.icon.textContent = "+"
        })

        if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + "px"
            icon.textContent = "−"

        }
    })
})


const blogData = [
    {
        img: "./images/eight section/one image.jpg",
        title: "KekeCruise Landing Page Redesign",
    },
    {
        img: "./images/eight section/two image.jpg",
        title: "Ride with Us this weekend!",
    },
    {
        img: "./images/eight section/three image.jpg",
        title: "KekeCruise Referral Contest",
    },
    {
        img: "./images/eight section/four image.jpg",
        title: "KekeCruise just launched today",
    },
]

const blogSlider = document.querySelector("#blogSlider")

// kartalarni generatsiya qilish
blogData.forEach((item) => {
    const card = document.createElement("article")
    // moslashuvchan kenglik: mobil 2 ta, planshet 3 ta, katta ekran 4 ta sig'adi
    card.className =
        "snap-start shrink-0 w-[calc(50%_-_12px)] sm:w-[calc(33.333%_-_16px)] lg:w-[calc(25%_-_18px)]"

    card.innerHTML = `
        <div class="h-[380px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
            <img
                src="${item.img}"
                alt="${item.title}"
                class="pointer-events-none h-full w-full object-cover"
            />
        </div>
        <div class="mt-5 flex items-start justify-between gap-4">
            <h3 class="max-w-[200px] text-[17px] font-bold leading-snug text-[#111]">
                ${item.title}
            </h3>
            <button
                type="button"
                class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FFAA00] text-black transition duration-300 hover:bg-black hover:text-white"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                </svg>
            </button>
        </div>
    `

    blogSlider.appendChild(card)
})


let isDown = false
let startX = 0
let scrollStart = 0

blogSlider.addEventListener("mousedown", (e) => {
    isDown = true
    blogSlider.classList.add("cursor-grabbing")
    startX = e.pageX
    scrollStart = blogSlider.scrollLeft
})

const stopDrag = () => {
    isDown = false
    blogSlider.classList.remove("cursor-grabbing")
}

blogSlider.addEventListener("mouseleave", stopDrag)
blogSlider.addEventListener("mouseup", stopDrag)

blogSlider.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const walk = (e.pageX - startX) * 1.5
    blogSlider.scrollLeft = scrollStart - walk
})


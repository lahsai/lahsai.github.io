var selected = null
const developments = [
  [
    {
      "title": "Google's Tree Canopy in the Environmental Insights Explorer",
      "paragraphs": [
        {"title": "INTRODUCTION", "content": "Urban Heat Islands refer to metropolitan areas that are warmer than outlying rural areas. Increased demand for amenities such as air conditioning causes greater energy consumption, higher GHG emissions, and compromised health. In fact, in the United States, daytime temperatures in urban areas are about 1-7 degrees fahrenheit higher than temperatures in outlying areas and nighttime  temperatures are about 2-5 degrees fahrenheit higher."},
        {"title": "DATA", "content": "High-Resolution Satellite Imagery of Urban Areas"},
        {"title": "AI METHODS", "content": "Image Recognition Algorithms are used to segment trees from other objects, such as roads, considering canopy color, texture, and shape. A city's tree canopy percentage is the percentage of pixels categorized as 'Tree'."},
        {"title": "RESULTS", "content": "- Then, Tree Canopy Lab uses these insights to produce a map, displaying the density of tree cover<br>- Often, areas lacking trees are warmer<br>- Tree Canopy enables city planners to identify places lacking tree coverage and create plans to address these areas<br>- Without AI, the process of determining where to focus tree-planting efforts may take years to complete"}
      ]
    },
    {
      "title": "Placeholder",
      "paragraphs": []
    },
  ],
  [
    {
      "title": "Placeholder",
      "paragraphs": []
    },
    {
      "title": "Placeholder",
      "paragraphs": []
    }
  ],
  [
    {
      "title": "Placeholder",
      "paragraphs": []
    },
    {
      "title": "Placeholder",
      "paragraphs": []
    }
  ],
  [
    {
      "title": "Sora",
      "paragraphs": [
        {"title": "INTRODUCTION", "content": "OpenAI's newest model, Sora, is a significant leap forward in Text-to-Video synthesis, offering the ability to generate videos of up to one minute in duration while ensuring high visual quality and adherence to user-defined prompts. Sora has the capacity to create complex scenes featuring multiple characters, diverse types of motion, and detailed renditions of both subjects and backgrounds. This capability stems from the model's advanced comprehension of user prompts, which is augmented by an intricate understanding of the physical interactions and spatial relations within the depicted scenes. Such an understanding enables Sora to accurately generate detailed scenarios, with a level of detail and realism previously unattainable in this technology domain"},
        {"title": "AI METHODS", "content": "Sora is a cutting-edge diffusion model by OpenAI that transforms videos from a starting point of static noise into clear visuals through a noise reduction diffusion process. It uniquely generates or extends videos, ensuring subjects remain consistent between frames, unlike Sora’s predecessors. Utilizing a transformer architecture akin to GPT models, it represents videos and images as patches for a broad training range. Building on DALL·E and GPT research, it uses recaptioning to closely follow text instructions, and can animate still images or enhance existing videos with precise detail. More technical details can be found here: https://openai.com/research/video-generation-models-as-world-simulators "},
        {"title": "RESULTS", "content": "Stunning, minute long videos."},
        {"title": "FUTURE WORK", "content": "OpenAI is currently working to make Sora safe and using red teamers to prevent misuse. The model will continue to improve over time. Implications for Design: Any stock video can be generated in high quality for cheaper, exactly to your liking."}
      ]
    },
    {
      "title": "Placeholder",
      "paragraphs": [
        {"title": "INTRODUCTION", "content": "v0.dev is an AI tool developed by Vercel in recent months. It’s still in beta, and is designed to be a generative system for user interfaces. The user enters a prompt for what to generate, and you get back React/NextJS code. Users can also send follow-up requests in messages, past the first generation. Additionally, v0.dev provides a live rendered view of the code to help the user choose their favorite of the three options. Still in its early stages, v0.dev has limited functionalities now. However, this is just a glimpse of what is to come. For example, Vercel states, “v0 can emit React DOM elements and shadcn/ui components”. This is just an example of how while v0.dev shows promise, it is still limited in its functionality now."},
        {"title": "AI METHODS", "content": "How is this different from just asking ChatGPT to generate some NextJS code? It’s currently unclear exactly how v0.dev is built, however, it can be assumed that it is using some sort of generative AI, specifically tailored to work well with React/NextJS, possibly using the NextJS docs as well as past NextJS projects. V0 was trained on code that Vercel’s team hand-wrote, along with open-source and synthetic datasets.<br>-While this might seem revolutionary on the surface, there have actually been AI website generators for much longer, even debuild.co from the GPT 3 days. Vercel also uses the user’s prompts and inputs to improve v0. User generations are also used and reviewed by the Vercel team."},
        {"title": "RESULTS", "content": "Clean NextJS components with live previews and back and forth conversation with the AI to tailor the component."},
        {"title": "FUTURE WORK", "content": "V0.dev is still in its very early stages and is likely to continue getting better. Ways that it will improve is increasing compatibility with more types of technologies, generating better code, having better integrations, etc."}
      ]
      
    }
  ]
]

function dquery(selector) {
  return document.querySelector(selector)
}

function dcreate(selector, classname=null) {
  const e = document.createElement(selector)
  if (classname) {
    e.className = classname
  }
  return e
}

function resetChild(id) {
  const el = document.getElementById(id).children[1]
  el.style.height = ""
  el.style.padding = ""
  el.style.cursor = "pointer"
  const title = el.children[0]
  el.innerHTML = ""
  el.append(title)
}

function openTopic(e) {
  const id = parseInt(e.id)
  ;[0, 1, 2, 3].forEach(function(item) {
    if (item != id) {resetChild(item)}
  })
  const nlc = dquery('#newsletterContainer')
  const main = e.children[1]
  if (selected == id) {
    /*selected = null
    nlc.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    resetChild(id)*/
    return
  }
  selected = id
  let cols = [1, 1, 1, 1]
  cols[id] = 5
  let s = ""
  cols.forEach(function(item) {s += `${item}fr `})
  nlc.style.gridTemplateColumns = s
  main.style.height = "100%"
  main.style.padding = "1rem"
  main.style.cursor = "auto"
  main.append(dcreate("div", "gap"))
  const closeButton = dcreate("div", "close-button")
  closeButton.onclick = function(event) {
    event.stopPropagation()
    selected = null
    nlc.style.gridTemplateColumns = ""
    resetChild(id)
  }
  closeButton.innerHTML = "X"
  main.append(closeButton)
  developments[id].forEach(function(dev) {
    const topicItem = dcreate("div", "topic-item")
    topicItem.onclick = function() {
      topicItem.style.height = (topicItem.style.height == "") ? "auto" : ""
    }
    const topicTitle = dcreate("div")
    const expandIcon = dcreate("img", "topic-icon")
    const iconContainer = dcreate("div", "centered-children topic-icon-container")
    iconContainer.append(expandIcon)
    topicItem.style.position = "relative"
    topicItem.style.gap = "1rem"
    topicTitle.innerHTML = dev.title
    topicTitle.style.display = "inline-block"
    expandIcon.src = "assets/icon_expand.png"
    topicItem.append(topicTitle, iconContainer)
    topicItem.append(dcreate("div", "gap"))
    dev.paragraphs.forEach(function(e) {
      const paragraphTitle = dcreate("div", "paragraph-title")
      paragraphTitle.innerHTML = e.title
      const paragraphContent = dcreate("p")
      paragraphContent.innerHTML = e.content
      topicItem.append(paragraphTitle, paragraphContent)
    })
    main.append(topicItem)
  })
}

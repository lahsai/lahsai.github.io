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
      "paragraphs": []
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

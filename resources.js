// types: 0=book, 1=course, 2=video
const resourceType = ["var(--text-inversed-secondary)", "var(--accent)", "rgb(255, 106, 106)"]
const resources = [
    {
        "title": "An Introductory AI Essentials Book",
        "type": 0,
        "url": "https://drive.google.com/drive/folders/1fYGqmXb3zIAqnniVECp8J9VBcawruPX_"
    },
    {
        "title": "Neural Network Simple",
        "type": 2,
        "url": "https://www.youtube.com/watch?v=rEDzUT3ymw4"
    },
    {
        "title": "Coursera Machine Learning Specialization",
        "type": 1,
        "url": "https://www.coursera.org/specializations/machine-learning-introduction"
    },
    {
        "title": "CS50 Introduction to Artificial Intelligence With Python",
        "type": 1,
        "url": "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python"
    },
    {
        "title": "Resources/Further Reading by Meeting",
        "type": 0,
        "url": "https://docs.google.com/document/d/1Ztimomv6eaxBpuEYz6RQ89z-lawSiiX2_0LBvcCS4hw/edit"
    },
    {
        "title": "What Are Neural Networks",
        "type": 2,
        "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    },
    {
        "title": "Hundred Page Machine Learning Book",
        "type": 0,
        "url": "https://themlbook.com/wiki/doku.php"
    },
    {
        "title": "Google Machine Learning Crash Course",
        "type": 1,
        "url": "https://developers.google.com/machine-learning/crash-course"
    }
]

window.onload = function() {
    const parent = dquery(".resource-container")
    const searchResults = dquery("#searchResults")
    const searchBar = dquery("#resourceSearch")
    searchResults.innerHTML = `${resources.length} result(s) found`

    resources.forEach(function(resource) {
        const e = dcreate("a", "resource")
        e.style.borderColor = resourceType[resource.type]
        e.innerHTML = resource.title
        e.target = "_blank"
        e.href = resource.url
        parent.append(e)
    })

    searchBar.oninput = function(e) {
        parent.innerHTML = ""
        let i = 0
        resources.forEach(function(resource) {
            if (resource.title.toLowerCase().includes(searchBar.value.toLowerCase())) {
                const e = dcreate("a", "resource")
                e.style.borderColor = resourceType[resource.type]
                e.innerHTML = resource.title
                e.target = "_blank"
                e.href = resource.url
                parent.append(e)
                i ++
            }
        })
        searchResults.innerHTML = `${i} result(s) found`
    }
}
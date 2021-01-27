import React, {useState} from "react"
import ImageList from "./gallery/ImageList"
import SearchBox from "./filter/SearchBox"
import Scroll from "./gallery/Scroll"
import SelectedImage from "./SelectedImage"
import imagesArr from "./gallery/images"

const App = () => {
  let [images] = useState(imagesArr)
  let [searchfield, setSearchfield] = useState("")
  let [selected, setSelected] = useState(0)
  let [category, setCategory] = useState('')

  const onSearchChange = (e) => {setSearchfield(e.target.value)}

  const getImgId = (e) => {setSelected(e.target.id)}

  const returnPortf = () => {setSelected(0)}

  const chooseCategory = (e) => {
    document.getElementsByClassName("chosen")[0].classList.remove("chosen")
    setCategory(e.target.name)
    e.target.className += " chosen"
  }

  const filteredImages = images.filter(image => {
    return image.category.includes(category) && (image.name.toLocaleLowerCase().includes(searchfield.toLowerCase()) || image.category.includes(searchfield.toLowerCase()) || image.color.some(el => el.includes(searchfield.toLowerCase())))
  })

  const gallery = (
    <div>
      <SearchBox 
        searchChange={onSearchChange} 
        handleClick={chooseCategory}
        searchfield={searchfield} 
      />
      {filteredImages.length > 0 ?
      <Scroll>
        <ImageList imgdata={filteredImages} handleClick={getImgId}/>
      </Scroll> :
      <p id="msg" className="f">Nothing was found</p>
      }
    </div>
  )

  const selectedImg = (
    <div>
      <SelectedImage imgdata={images} num={selected} handleClick={returnPortf}/>
    </div>
  )

  return selected > 0 ? selectedImg : gallery
}

export default App;

import React, { useState } from "react";


const MovieCard = () => {
    const [list,setList] = useState([
        {Title : "The Weathering With You",
        Image:"https://pyxis.nymag.com/v1/imgs/a35/319/573770d8b3de5c8392b9246a7d4eb9c141-15-weathering-with-you-2.rhorizontal.w700.jpg",
        Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
        Rating:"3"
    },
    {Title : "The Color of space",
    Image:"https://pyxis.nymag.com/v1/imgs/053/73c/dda7e5796b67c5e312fc5b85aa0b367dd9-color-out-of-space.rhorizontal.w700.jpg",
    Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
    Rating:"3"
},
{Title : "The Assistant",
Image:"https://pyxis.nymag.com/v1/imgs/7c3/4af/68e90dd61b563b6611a8a06416d3f20757-05-the-assistant.rhorizontal.w700.jpg",
Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
Rating:"2"
},
{Title : "The Wishlers",
Image:"https://pyxis.nymag.com/v1/imgs/611/ec2/21d4ae85681a205283e4f1f3ba53b09d7c-03-the-whistlers.rhorizontal.w700.jpg",
Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
Rating:"3"
}
    ])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchlist, setSearchlist] = useState(list)
    const [empty,setEmpty] = useState(true)

    const [searchByRate, setSearchByRate] = useState(list)
    const [starClicked, setstarClicked] = useState(false)



import { GrDocumentWord } from "react-icons/gr";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { CgChart } from "react-icons/cg";
import { Link } from "react-router-dom";

function Games() {

  return (
    <div className='container'>
      <div className="container h-[100vh] flex items-center">
        <ul className="menu bg-base-200 text-2xl w-full">
          <li className="cursor-pointer">
            <Link to="/allWords">
              <GrDocumentWord />
              Barcha so'zlar bo'yicha
            </Link>
          </li>
          <li>
            <Link to="/tenWords">
              <CgChart />
              Random 10 ta so'z bo'yicha
            </Link>
          </li>
          <li>
            <Link to="/twentyWords">
              <GiDiceTwentyFacesTwenty />
              Random 20 ta so'z bo'yicha
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Games
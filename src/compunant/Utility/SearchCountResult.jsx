import UnopDropdown from "unop-react-dropdown";
import sort from '../../assets/sort.png'
import './SearchCountResult.css'

// eslint-disable-next-line react/prop-types
const SearchCountResult = ({ title }) => {
    let handler=()=>{

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">الكل</div>
                        <div className="border-bottom card-filter-item">خطوبة</div>
                        <div className="border-bottom card-filter-item">اكسسوار</div>
                        <div className="border-bottom card-filter-item">السعر من الاقل للاعلي</div>
                        <div className=" card-filter-item">السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
import dayjs from "dayjs";

export default function Posts({item}) {
    return (
        <div className="col-sm-4">
          <div className="card my-2">
            <img src={item?.image} className="card-img-top" alt="image users-img" />
            <div className="card-body">
              <h5 className="card-title">
                {item?.first_name} {item?.last_name}
              </h5>
              <p className="card-text">{item?.email}</p>
              <p className="card-text">{item?.gender}</p>
              <p className="card-text">
                {dayjs(item?.date).format("DD MMMM YYYY")}
              </p>
            </div>
          </div>
        </div>
    );
};

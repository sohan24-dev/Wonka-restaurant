import OrderClientList from '@/components/OrderClientList';
import { orderallitems } from '../lib/data';
import { handleDelete } from '../lib/action';


const OrderlistAll = async () => {
    const allitems = await orderallitems();

    return (
        <div className="my-2">
            <OrderClientList handleDelete={handleDelete} allitems={allitems} />
        </div>
    );
};

export default OrderlistAll;
import Swal from 'sweetalert2';

export const PaymentAccepted = (total) => {
    Swal.fire({
        icon: 'success',
        title: `Gracias por su compra`,
        text: `Usted ha pagado RD$ ${FormatPrice(total)}`
    })
}

export const FormatPrice = (price) => {
    let resultPrice = new Intl.NumberFormat('en-US').format(price);
    return resultPrice;
}
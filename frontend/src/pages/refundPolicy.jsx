import Typography from '@mui/material/Typography';

function Refund() {
  return (
    <Typography
    variant="subtitle1"
    
    style={{margin: 80}}
    paragraph="true"
    sx={{
      mr: 2,
      fontFamily: 'monospace',
      fontWeight: 200,
      letterSpacing: '.2rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
    >
      <h4>Returns</h4>

        Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or an exchange.

        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.

        Several types of goods are exempt from being returned. Perishable goods such as food, flowers, plants, newspapers or magazines cannot be returned. 

        Additional non-returnable items:
        All Plants
        Gift cards
        Downloadable software products
        Some health and personal care items

        To complete your return, we require a receipt or proof of purchase.

      <h4>Refunds (if applicable)</h4>
        
        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
        If approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
        Only regular priced items may be refunded, unfortunately sale items cannot be refunded.

      <h4>Exchanges (if applicable)</h4>

        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at planty@gmail.com and send your item to: 111 Nissim Aloni Street Tel Aviv IL 62515.

      <h4>Gifts</h4>

        If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.

        If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.

      <h4>Shipping</h4>
        To return your product, you should mail your product to: 111 Nissim Aloni Street Tel Aviv IL 62515.

        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.

    </Typography>

  );
}

export default Refund;

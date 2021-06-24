export default function handle_admin(req, res) {
    if (req.method === 'GET') {

        res.status(200).json({ name: 'Admin Istrator', status: 'Testing'})

    } else {
        res.status(405).json({ message: 'Method is not supported for this resource.'})
    }
}
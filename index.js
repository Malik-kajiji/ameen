const express = require('express');
const cors = require('cors'); // Import cors for cross-origin requests
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Define a port
const PORT = 3000;

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Define the news route
app.get('/news', (req, res) => {
    const data = [
        {
            id: '1',
            title: 'عرض خاص للاشتراك الشهري',
            description: 'اشترك الآن واحصل على شهر مجاني!',
            image: 'https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain',
          },
          {
            id: '2',
            title: 'أحدث الأخبار في الصالة الرياضية',
            description: 'قم بزيارة الصالة لتجربة أحدث الأجهزة.',
            image: 'https://th.bing.com/th/id/OIP.2W3eacggUz-tP_OTEeTi0wHaEJ?rs=1&pid=ImgDetMain',
          },
          {
            id: '3',
            title: 'أحدث الأخبار في الصالة الرياضية',
            description: 'قم بزيارة الصالة لتجربة أحدث الأجهزة.',
            image: 'https://th.bing.com/th/id/R.c9f5b51f687360f3f26df118f705969b?rik=PoKcJYUtjeYCYQ&pid=ImgRaw&r=0',
          },
    ];

    res.json( data );
});

// Define the user login route
app.post('/user-login', (req, res) => {
    const users = [
        {
            name: 'ameen',
            password: '123',
            date: '2/6/2001'
        }
    ];

    const { name, password } = req.body;
    console.log(name)
    console.log(password)
    if (name === users[0].name && password === users[0].password) {
        res.json({ message: 'Login successful', user: users[0] });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/subs', (req, res) => {
    const data = {
            name: '  أمين حامدالترهوني',
            status: 'مشترك',
            birthdate: '2001/06/02',
            remainingDays: 22,
            currentWeight: 75,
            attendanceData: [5, 7, 8, 6, 7, 5, 8],
        };

    res.json( data );
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
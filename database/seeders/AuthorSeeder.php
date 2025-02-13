<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure all existing users have an author profile
        $users = User::all();

        foreach ($users as $user) {
            if (!$user->author) {
                Author::create([
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'description' => 'A prolific software creator.',
                ]);
            }
        }

        // Also create a new user-author pair if needed
        $newUsers = [
            [
                'email' => 'john@example.com',
                'name' => 'John Doe',
            ],
            [
                'email' => 'jane@example.com',
                'name' => 'Jane Doe',
            ],
            [
                'email' => 'bob@example.com',
                'name' => 'Bob Smith',
            ],
        ];

        foreach ($newUsers as $newUser) {
            $user = User::firstOrCreate([
                'email' => $newUser['email'],
            ], [
                'name' => $newUser['name'],
                'password' => bcrypt('password'),
            ]);

            if (!$user->author) {
                Author::create([
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'description' => 'A prolific software creator.',
                ]);
            }
        }
    }
}

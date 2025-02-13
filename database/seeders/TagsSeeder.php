<?php

namespace Database\Seeders;

use App\Models\Tags;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            ['name' => 'Free'],
            ['name' => 'Paid'],
            ['name' => 'Open Source'],
            ['name' => 'Subscription-Based'],
            ['name' => 'Productivity'],
        ];

        foreach ($tags as $tag) {
            Tags::create($tag);
        }
    }
}

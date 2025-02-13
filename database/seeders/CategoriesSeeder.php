<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Latest', 'icon' => 'Hash', 'slug' => 'latest'],
            ['name' => 'Frontend', 'icon' => 'MonitorSmartphone', 'slug' => 'frontend'],
            ['name' => 'Backend', 'icon' => 'Server', 'slug' => 'backend'],
            ['name' => 'Database', 'icon' => 'Database', 'slug' => 'database'],
            ['name' => 'Security', 'icon' => 'Shield', 'slug' => 'security'],
            ['name' => 'DevOps', 'icon' => 'Cloud', 'slug' => 'devops'],
            ['name' => 'Mobile', 'icon' => 'Tablet', 'slug' => 'mobile'],
            ['name' => 'Design', 'icon' => 'PaintBrush', 'slug' => 'design'],
            ['name' => 'Testing', 'icon' => 'Bug', 'slug' => 'testing'],
            ['name' => 'Machine Learning', 'icon' => 'Bot', 'slug' => 'machine-learning'],
            ['name' => 'Plugins', 'icon' => 'Puzzle', 'slug' => 'plugins'],
            ['name' => 'Other', 'icon' => 'Ellipsis', 'slug' => 'other'],
        ];

        foreach ($categories as $category) {
            Categories::create($category);
        }
    }
}

import type { Meta, StoryObj } from '@storybook/react';

import GolfCourseOutlined from '../../lib/places/GolfCourseOutlined';

const meta: Meta<typeof GolfCourseOutlined> = {
  component: GolfCourseOutlined,
  tags: ['autodocs'],
  title: 'places/GolfCourseOutlined',
};

export default meta;
type Story = StoryObj<typeof GolfCourseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

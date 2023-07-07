import type { Meta, StoryObj } from '@storybook/react';

import CheckroomOutlined from '../../lib/places/CheckroomOutlined';

const meta: Meta<typeof CheckroomOutlined> = {
  component: CheckroomOutlined,
  tags: ['autodocs'],
  title: 'places/CheckroomOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckroomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

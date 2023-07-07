import type { Meta, StoryObj } from '@storybook/react';

import SchoolOutlined from '../../lib/social/SchoolOutlined';

const meta: Meta<typeof SchoolOutlined> = {
  component: SchoolOutlined,
  tags: ['autodocs'],
  title: 'social/SchoolOutlined',
};

export default meta;
type Story = StoryObj<typeof SchoolOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

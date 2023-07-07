import type { Meta, StoryObj } from '@storybook/react';

import MopedOutlined from '../../lib/maps/MopedOutlined';

const meta: Meta<typeof MopedOutlined> = {
  component: MopedOutlined,
  tags: ['autodocs'],
  title: 'maps/MopedOutlined',
};

export default meta;
type Story = StoryObj<typeof MopedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

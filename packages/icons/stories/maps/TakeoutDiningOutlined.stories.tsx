import type { Meta, StoryObj } from '@storybook/react';

import TakeoutDiningOutlined from '../../lib/maps/TakeoutDiningOutlined';

const meta: Meta<typeof TakeoutDiningOutlined> = {
  component: TakeoutDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/TakeoutDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof TakeoutDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

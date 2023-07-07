import type { Meta, StoryObj } from '@storybook/react';

import OutletOutlined from '../../lib/action/OutletOutlined';

const meta: Meta<typeof OutletOutlined> = {
  component: OutletOutlined,
  tags: ['autodocs'],
  title: 'action/OutletOutlined',
};

export default meta;
type Story = StoryObj<typeof OutletOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

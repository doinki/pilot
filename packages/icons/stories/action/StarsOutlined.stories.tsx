import type { Meta, StoryObj } from '@storybook/react';

import StarsOutlined from '../../lib/action/StarsOutlined';

const meta: Meta<typeof StarsOutlined> = {
  component: StarsOutlined,
  tags: ['autodocs'],
  title: 'action/StarsOutlined',
};

export default meta;
type Story = StoryObj<typeof StarsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

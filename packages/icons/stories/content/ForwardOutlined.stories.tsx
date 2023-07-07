import type { Meta, StoryObj } from '@storybook/react';

import ForwardOutlined from '../../lib/content/ForwardOutlined';

const meta: Meta<typeof ForwardOutlined> = {
  component: ForwardOutlined,
  tags: ['autodocs'],
  title: 'content/ForwardOutlined',
};

export default meta;
type Story = StoryObj<typeof ForwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

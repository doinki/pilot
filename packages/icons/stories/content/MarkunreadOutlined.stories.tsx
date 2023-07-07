import type { Meta, StoryObj } from '@storybook/react';

import MarkunreadOutlined from '../../lib/content/MarkunreadOutlined';

const meta: Meta<typeof MarkunreadOutlined> = {
  component: MarkunreadOutlined,
  tags: ['autodocs'],
  title: 'content/MarkunreadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkunreadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import GeneratingTokensOutlined from '../../lib/action/GeneratingTokensOutlined';

const meta: Meta<typeof GeneratingTokensOutlined> = {
  component: GeneratingTokensOutlined,
  tags: ['autodocs'],
  title: 'action/GeneratingTokensOutlined',
};

export default meta;
type Story = StoryObj<typeof GeneratingTokensOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import SpellcheckOutlined from '../../lib/action/SpellcheckOutlined';

const meta: Meta<typeof SpellcheckOutlined> = {
  component: SpellcheckOutlined,
  tags: ['autodocs'],
  title: 'action/SpellcheckOutlined',
};

export default meta;
type Story = StoryObj<typeof SpellcheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

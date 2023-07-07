import type { Meta, StoryObj } from '@storybook/react';

import InvertColorsOutlined from '../../lib/action/InvertColorsOutlined';

const meta: Meta<typeof InvertColorsOutlined> = {
  component: InvertColorsOutlined,
  tags: ['autodocs'],
  title: 'action/InvertColorsOutlined',
};

export default meta;
type Story = StoryObj<typeof InvertColorsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import InvertColorsOffOutlined from '../../lib/communication/InvertColorsOffOutlined';

const meta: Meta<typeof InvertColorsOffOutlined> = {
  component: InvertColorsOffOutlined,
  tags: ['autodocs'],
  title: 'communication/InvertColorsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof InvertColorsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

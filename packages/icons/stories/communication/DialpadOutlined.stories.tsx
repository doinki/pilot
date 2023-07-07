import type { Meta, StoryObj } from '@storybook/react';

import DialpadOutlined from '../../lib/communication/DialpadOutlined';

const meta: Meta<typeof DialpadOutlined> = {
  component: DialpadOutlined,
  tags: ['autodocs'],
  title: 'communication/DialpadOutlined',
};

export default meta;
type Story = StoryObj<typeof DialpadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

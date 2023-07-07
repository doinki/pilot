import type { Meta, StoryObj } from '@storybook/react';

import MicExternalOnOutlined from '../../lib/image/MicExternalOnOutlined';

const meta: Meta<typeof MicExternalOnOutlined> = {
  component: MicExternalOnOutlined,
  tags: ['autodocs'],
  title: 'image/MicExternalOnOutlined',
};

export default meta;
type Story = StoryObj<typeof MicExternalOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

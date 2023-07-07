import type { Meta, StoryObj } from '@storybook/react';

import MicExternalOffOutlined from '../../lib/image/MicExternalOffOutlined';

const meta: Meta<typeof MicExternalOffOutlined> = {
  component: MicExternalOffOutlined,
  tags: ['autodocs'],
  title: 'image/MicExternalOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MicExternalOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

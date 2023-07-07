import type { Meta, StoryObj } from '@storybook/react';

import GavelOutlined from '../../lib/action/GavelOutlined';

const meta: Meta<typeof GavelOutlined> = {
  component: GavelOutlined,
  tags: ['autodocs'],
  title: 'action/GavelOutlined',
};

export default meta;
type Story = StoryObj<typeof GavelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

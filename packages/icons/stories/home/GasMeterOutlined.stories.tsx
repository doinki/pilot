import type { Meta, StoryObj } from '@storybook/react';

import GasMeterOutlined from '../../lib/home/GasMeterOutlined';

const meta: Meta<typeof GasMeterOutlined> = {
  component: GasMeterOutlined,
  tags: ['autodocs'],
  title: 'home/GasMeterOutlined',
};

export default meta;
type Story = StoryObj<typeof GasMeterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

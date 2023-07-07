import type { Meta, StoryObj } from '@storybook/react';

import ScreenRotationAltOutlined from '../../lib/maps/ScreenRotationAltOutlined';

const meta: Meta<typeof ScreenRotationAltOutlined> = {
  component: ScreenRotationAltOutlined,
  tags: ['autodocs'],
  title: 'maps/ScreenRotationAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenRotationAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

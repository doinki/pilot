import type { Meta, StoryObj } from '@storybook/react';

import MiscellaneousServicesOutlined from '../../lib/maps/MiscellaneousServicesOutlined';

const meta: Meta<typeof MiscellaneousServicesOutlined> = {
  component: MiscellaneousServicesOutlined,
  tags: ['autodocs'],
  title: 'maps/MiscellaneousServicesOutlined',
};

export default meta;
type Story = StoryObj<typeof MiscellaneousServicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

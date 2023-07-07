import type { Meta, StoryObj } from '@storybook/react';

import DesignServicesOutlined from '../../lib/maps/DesignServicesOutlined';

const meta: Meta<typeof DesignServicesOutlined> = {
  component: DesignServicesOutlined,
  tags: ['autodocs'],
  title: 'maps/DesignServicesOutlined',
};

export default meta;
type Story = StoryObj<typeof DesignServicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
